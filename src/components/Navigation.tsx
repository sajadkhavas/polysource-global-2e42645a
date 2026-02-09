import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, ShieldCheck, Factory, BriefcaseBusiness } from 'lucide-react';
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
  const [isShrunk, setIsShrunk] = useState(false);
  const { products } = useRFQ();
  const industrialMenuRef = useRef<HTMLDivElement | null>(null);

  const industrialItem = navigationData.find(item => item.id === 'industrial-equipment');
  const servicesItem = navigationData.find(item => item.id === 'services');
  const newsItem = navigationData.find(item => item.id === 'insights');
  const aboutItem = navigationData.find(item => item.id === 'about');

  useEffect(() => {
    const onScroll = () => setIsShrunk(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + '/');


  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!industrialMenuRef.current?.contains(event.target as Node)) {
        setMegaMenuOpen((prev) => (prev === 'industrial-equipment' ? null : prev));
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMegaMenuOpen((prev) => (prev === 'industrial-equipment' ? null : prev));
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onEscape);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-xl">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex items-center justify-between border-b border-white/10 py-2 text-xs text-slate-300">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5"><Factory className="h-3.5 w-3.5 text-cyan-300" /> +120 پروژه صنعتی</span>
            <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness className="h-3.5 w-3.5 text-cyan-300" /> +85 کارفرمای فعال</span>
          </div>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-amber-300" /> تامین‌کننده تایید شده تجهیزات ابزار دقیق</span>
        </div>

        <div className={cn('hidden lg:grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300', isShrunk ? 'py-2.5' : 'py-4')}>
          <div className="flex items-center gap-3 justify-self-start">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="relative border-cyan-300/30 bg-white/5 text-slate-100 hover:bg-cyan-400/10">
                  <ShoppingCart className="h-5 w-5" />
                  <span>RFQ Cart</span>
                  {products.length > 0 && (
                    <Badge className="absolute -left-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-amber-400 text-slate-900">
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
                      <div key={product.id} className="flex items-start justify-between rounded-lg border border-border p-3">
                        <div>
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="ltr font-mono text-xs text-muted-foreground">{product.type}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Button asChild className="bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-industrial-glow hover:shadow-industrial-glow-soft transition-shadow">
              <Link to="/contact">درخواست پیش‌فاکتور</Link>
            </Button>
          </div>

          <div className="flex items-center gap-7 justify-self-center">
            {industrialItem && (
              <div
                ref={industrialMenuRef}
                onMouseEnter={() => setMegaMenuOpen('industrial-equipment')}
              >
                <button
                  type="button"
                  onClick={() => setMegaMenuOpen((prev) => (prev === 'industrial-equipment' ? null : 'industrial-equipment'))}
                  aria-expanded={megaMenuOpen === 'industrial-equipment'}
                  aria-controls="industrial-mega-menu"
                  className={cn('rounded-md px-3 py-2 text-sm font-semibold transition', isActive('/products') ? 'text-cyan-300' : 'text-slate-100 hover:text-cyan-300')}
                >
                  {industrialItem.label}
                </button>

                {megaMenuOpen === 'industrial-equipment' && (
                  <MegaMenu item={industrialItem} onClose={() => setMegaMenuOpen(null)} />
                )}
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

          <Link to="/" className="flex items-center gap-3 justify-self-end">
            <div className={cn('grid place-items-center rounded-xl border border-cyan-300/30 bg-gradient-to-br from-[#1E293B] to-[#0F172A] transition-all', isShrunk ? 'h-10 w-10' : 'h-12 w-12')}>
              <span className="text-sm font-black tracking-wider text-cyan-300">PID</span>
            </div>
            <div>
              <p className="text-base font-bold text-slate-50">پارس ابزار دقیق</p>
              <p className="text-xs text-slate-400">Industrial Instrumentation Solutions</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-between py-4 lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
              <span className="text-xs font-bold text-primary-foreground">PID</span>
            </div>
            <span className="text-lg font-bold text-foreground">پارس ابزار دقیق</span>
          </Link>

          <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="max-h-[70vh] overflow-y-auto border-t border-border py-4 lg:hidden">
            <MobileNav items={navigationData} onClose={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
}
