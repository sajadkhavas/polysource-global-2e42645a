import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem } from '@/data/navigation';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
  item: NavigationItem;
  onClose: () => void;
}

export function MegaMenu({ item, onClose }: MegaMenuProps) {
  const [activeGroupId, setActiveGroupId] = useState<string | null>(
    item.children?.[0]?.id || null
  );

  if (item.id !== 'lab-equipment' || !item.children) {
    return null;
  }

  const activeGroup = item.children.find(group => group.id === activeGroupId);

  return (
    <div className="hidden lg:block absolute left-0 right-0 top-full bg-background border-t border-border shadow-2xl z-[100]">
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 max-w-[1400px] mx-auto">
          {/* Column 1: Product Families (3 cols) */}
          <div className="col-span-3 space-y-1">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 px-3">
              دسته‌بندی محصولات
            </h4>
            {item.children.map((group) => (
              <button
                key={group.id}
                onMouseEnter={() => setActiveGroupId(group.id)}
                onClick={() => {
                  setActiveGroupId(group.id);
                }}
                className={cn(
                  'w-full text-right px-3 py-2.5 rounded-md text-sm font-semibold transition-all duration-200',
                  activeGroupId === group.id
                    ? 'bg-primary/10 text-primary shadow-sm'
                    : 'text-foreground/70 hover:bg-primary/5 hover:text-primary hover:shadow-sm'
                )}
              >
                {group.label}
              </button>
            ))}
          </div>

          {/* Column 2: Key Materials for Selected Family (7 cols) */}
          <div className="col-span-7 border-r border-border/40 pr-8">
            {activeGroup && (
              <>
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                  {activeGroup.label}
                </h4>
                
                {activeGroup.children && activeGroup.children.length > 0 && (
                  <div className="space-y-4 max-h-[420px] overflow-y-auto pl-2 custom-scrollbar">
                    {activeGroup.children.map((category) => (
                      <div key={category.id} className="pb-3 border-b border-border/60">
                        {/* Category (Second Level) - Bold Primary */}
                <Link
                  to={category.href || '#'}
                  onClick={onClose}
                  className="group inline-flex items-center justify-between text-sm font-bold text-primary hover:text-primary hover:bg-primary/5 transition-all w-full px-2 py-1.5 rounded-md -mx-2"
                >
                  <span>{category.label}</span>
                  <ChevronLeft className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Column 3: Help Block (2 cols) */}
          <div className="col-span-2 border-r border-border/40 pr-6">
            <div className="bg-muted/30 rounded-lg p-5 border border-border/60 space-y-4 h-fit sticky top-4">
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-foreground">نیاز به راهنمایی دارید؟</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  مطمئن نیستید کدام دستگاه مناسب کاربرد شماست؟
                </p>
              </div>

              <Link
                to="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary hover:bg-primary/5 transition-all group px-3 py-2 rounded-md -mx-3"
              >
                دریافت مشاوره فنی
                <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
              </Link>

              <div className="pt-3 border-t border-border/40">
                <Link
                  to="/products"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all group px-3 py-1.5 rounded-md -mx-3"
                >
                  مشاهده همه محصولات
                  <ChevronLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
