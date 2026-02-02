import { Link } from 'react-router-dom';
import { NavigationItem } from '@/data/navigation';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown, Microscope, Info } from 'lucide-react';
import { useState } from 'react';

interface MobileNavProps {
  items: NavigationItem[];
  onClose: () => void;
}

export function MobileNav({ items, onClose }: MobileNavProps) {
  const labEquipment = items.find(item => item.id === 'lab-equipment');
  const services = items.find(item => item.id === 'services');
  const news = items.find(item => item.id === 'insights');
  const about = items.find(item => item.id === 'about');

  return (
    <div className="space-y-6">
      {/* Brand Summary with Trust Signals */}
      <div className="px-4 py-3 bg-muted/50 rounded-lg border border-border/50">
        <p className="text-sm font-semibold text-foreground mb-1">
          آزمایشگاه پیشرفته
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2">
          تأمین تجهیزات آزمایشگاهی پیشرفته
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span><span className="font-semibold text-foreground">+۱۰۰</span> مشتری</span>
          <span className="text-border">|</span>
          <span><span className="font-semibold text-foreground">+۵۰۰</span> دستگاه</span>
        </div>
      </div>

      {/* Section 1: Browse by Product */}
      <div className="space-y-2">
        <div className="px-3">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center">
            <Microscope className="h-4 w-4 ml-1.5" />
            تجهیزات آزمایشگاهی
          </h3>
        </div>
        {labEquipment && (
          <MobileNavSection item={labEquipment} onClose={onClose} />
        )}
      </div>

      {/* Section 2: More about Company */}
      <div className="space-y-2">
        <div className="px-3">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center">
            <Info className="h-4 w-4 ml-1.5" />
            بیشتر بدانید
          </h3>
        </div>
        <div className="space-y-1">
          {services && <MobileNavSection item={services} onClose={onClose} />}
          {news && <MobileNavSection item={news} onClose={onClose} />}
          {about && <MobileNavSection item={about} onClose={onClose} />}
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="px-3 pt-4 border-t border-border space-y-2">
        <Link to="/contact" onClick={onClose}>
          <Button className="w-full" size="lg">
            درخواست مشاوره
          </Button>
        </Link>
        <Link to="/products" onClick={onClose}>
          <Button variant="outline" className="w-full" size="lg">
            مشاهده تمام محصولات
          </Button>
        </Link>
      </div>
    </div>
  );
}

interface MobileNavSectionProps {
  item: NavigationItem;
  onClose: () => void;
}

function MobileNavSection({ item, onClose }: MobileNavSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        to={item.href || '#'}
        onClick={onClose}
        className="block px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className="flex items-center justify-between w-full px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </CollapsibleTrigger>
      
      <CollapsibleContent className="space-y-1 mt-1 mr-4">
        {item.children?.map((child) => (
          <MobileNavItem
            key={child.id}
            item={child}
            onClose={onClose}
            level={1}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

interface MobileNavItemProps {
  item: NavigationItem;
  onClose: () => void;
  level: number;
}

function MobileNavItem({ item, onClose, level }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const paddingRight = level * 12;

  if (!hasChildren) {
    return (
      <Link
        to={item.href || '#'}
        onClick={onClose}
        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        style={{ paddingRight: `${paddingRight}px` }}
      >
        {item.label}
      </Link>
    );
  }

  // For items with children, show as collapsible only if level is reasonable
  if (level >= 2) {
    // Flatten deeper levels - just show as links
    return (
      <div className="space-y-1">
        <Link
          to={item.href || '#'}
          onClick={onClose}
          className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          style={{ paddingRight: `${paddingRight}px` }}
        >
          {item.label}
        </Link>
        {item.children?.map((child) => (
          <Link
            key={child.id}
            to={child.href || '#'}
            onClick={onClose}
            className="block py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            style={{ paddingRight: `${paddingRight + 12}px` }}
          >
            {child.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        style={{ paddingRight: `${paddingRight}px` }}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </CollapsibleTrigger>
      
      <CollapsibleContent className="space-y-1">
        {item.children?.map((child) => (
          <MobileNavItem
            key={child.id}
            item={child}
            onClose={onClose}
            level={level + 1}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
