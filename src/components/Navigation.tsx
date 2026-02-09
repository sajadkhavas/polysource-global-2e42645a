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
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Two-layer header */}
        <div className="hidden lg:block">
          {/* Top layer: Brand + Trust signals */}
          <div className="flex items-center justify-between py-3 border-b border-border/50">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center" aria-hidden="true">
                  <span className="text-primary-foreground font-black text-sm">PID</span>
                </div>
                <div>
                  <span className="text-xl font-black text-foreground block leading-none">پارس ابزار دقیق</span>
                  <span className="text-xs text-muted-foreground block mt-0.5">تجهیزات ابزار دقیق و اتوماسیون صنعتی</span>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-foreground">+۵۰۰</span>
                <span>مشتری صنعتی</span>
              </div>
              <div className="h-3 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-foreground">+۲۰۰۰</span>
                <span>پروژه اجرا شده</span>
              </div>
            </div>
          </div>

          {/* Bottom layer: Navigation + Actions */}
          <div className="relative flex items-center justify-between h-14">
            <div className="flex items-center gap-1">
              {industrialItem && (
                <div
                  onMouseEnter={() => setMegaMenuOpen('industrial-equipment')}
                  onMouseLeave={() => setMegaMenuOpen(null)}
                >
                  <Link
                    to={industrialItem.href || '/products'}
                    className={cn(
                      'text-sm font-bold transition-colors px-4 py-2 rounded-md',
                      isActive('/products')
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/90 hover:bg-muted hover:text-primary'
                    )}
                  >
                    {industrialItem.label}
                  </Link>
                </div>
              )}
              
              {megaMenuOpen === 'industrial-equipment' && industrialItem && (
                <div
                  onMouseEnter={() => setMegaMenuOpen('industrial-equipment')}
                  onMouseLeave={() => setMegaMenuOpen(null)}
                >
                  <MegaMenu item={industrialItem} onClose={() => setMegaMenuOpen(null)} />
                </div>
              )}

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

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/products">مشاهده محصولات</Link>
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="relative">
                    <ShoppingCart className="h-4 w-4" />
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
                      <>
                        {products.map((product) => (
                          <div key={product.id} className="flex items-start justify-between p-3 border border-border rounded-lg">
                            <div>
                              <p className="font-medium text-sm">{product.name}</p>
                              <p className="text-xs text-muted-foreground font-mono ltr">{product.type}</p>
                            </div>
                          </div>
                        ))}
                        <Button asChild variant="cta" className="w-full">
                          <Link to="/contact">ارسال استعلام قیمت</Link>
                        </Button>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <Button asChild variant="cta">
                <Link to="/contact">استعلام قیمت</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile header */}
        <div className="flex lg:hidden h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center" aria-hidden="true">
              <span className="text-primary-foreground font-black text-xs">PID</span>
            </div>
            <span className="text-lg font-black text-foreground">پارس ابزار دقیق</span>
          </Link>

          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4" />
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
                    <>
                      {products.map((product) => (
                        <div key={product.id} className="flex items-start justify-between p-3 border border-border rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-muted-foreground font-mono ltr">{product.type}</p>
                          </div>
                        </div>
                      ))}
                      <Button asChild variant="cta" className="w-full">
                        <Link to="/contact">ارسال استعلام قیمت</Link>
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
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
