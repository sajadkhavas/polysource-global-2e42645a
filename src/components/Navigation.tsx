import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useRFQ } from '@/contexts/RFQContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { navigationData } from '@/data/navigation';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { DesktopDropdown } from './DesktopDropdown';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { products } = useRFQ();

  const industrialItem = navigationData.find(item => item.id === 'industrial-equipment');
  const servicesItem = navigationData.find(item => item.id === 'services');
  const newsItem = navigationData.find(item => item.id === 'insights');
  const aboutItem = navigationData.find(item => item.id === 'about');

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-primary to-accent border-b border-border backdrop-blur-sm">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center py-4">
          {/* Logo and Trust Signals */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-accent to-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">PID</span>
              </div>
              <div className="text-xl font-bold text-foreground">
                پارس ابزار دقیق
                <span className="block text-sm text-muted-foreground mt-0.5">تجهیزات ابزار دقیق و اتوماسیون صنعتی</span>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center gap-8">
            {industrialItem && (
              <div
                onMouseEnter={() => setMegaMenuOpen('industrial-equipment')}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <Link
                  to={industrialItem.href || '/products'}
                  className={cn('text-sm font-semibold px-4 py-2 rounded-md transition duration-200', isActive('/products') ? 'bg-primary text-foreground' : 'hover:text-primary')}
                >
                  {industrialItem.label}
                </Link>
              </div>
            )}

            {megaMenuOpen === 'industrial-equipment' && industrialItem && (
              <MegaMenu item={industrialItem} onClose={() => setMegaMenuOpen(null)} />
            )}

            {/* Dropdowns */}
            {servicesItem && (
              <DesktopDropdown
                item={servicesItem}
                isOpen={dropdownOpen === 'services'}
                onOpenChange={(open) => setDropdownOpen(open ? 'services' : null)}
                isActive={isActive}
              />
            )}
            {newsItem && (
              <DesktopDropdown
                item={newsItem}
                isOpen={dropdownOpen === 'news'}
                onOpenChange={(open) => setDropdownOpen(open ? 'news' : null)}
                isActive={isActive}
              />
            )}
            {aboutItem && (
              <DesktopDropdown
                item={aboutItem}
                isOpen={dropdownOpen === 'about'}
                onOpenChange={(open) => setDropdownOpen(open ? 'about' : null)}
                isActive={isActive}
              />
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/products">مشاهده محصولات</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {products.length > 0 && (
                    <Badge className="absolute -left-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent text-accent-foreground">
                      {products.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>سبد استعلام</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {products.length === 0 ? (
                    <p className="text-sm text-muted-foreground">هنوز محصولی اضافه نشده</p>
                  ) : (
                    products.map((product) => (
                      <div key={product.id} className="flex items-start justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{product.name}</p>
                          <p className="text-xs text-muted-foreground font-mono ltr">{product.type}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Button asChild variant="cta">
              <Link to="/contact">استعلام قیمت</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">PID</span>
            </div>
            <span className="text-lg font-bold text-foreground">پارس ابزار دقیق</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
            <MobileNav items={navigationData} onClose={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
}
