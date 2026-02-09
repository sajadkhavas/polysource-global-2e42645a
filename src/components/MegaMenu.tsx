import { type ComponentType, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  ChevronLeft,
  Cpu,
  FlaskConical,
  Gauge,
  ShieldCheck,
  Wind,
  X,
} from 'lucide-react';
import { NavigationItem } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
  item: NavigationItem;
  onClose: () => void;
}

interface CategoryGroup {
  id: string;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  badge?: string;
  href: string;
  subcategories: { id: string; label: string; href: string }[];
}

const industrialCategories: CategoryGroup[] = [
  {
    id: 'gas-generators',
    label: 'ژنراتورهای گاز',
    description: 'تولید پایدار گازهای خالص برای خطوط آنالیز و فرایندهای آزمایشگاهی.',
    icon: Wind,
    href: '/products?category=gas-generators',
    subcategories: [
      { id: 'hydrogen', label: 'ژنراتور هیدروژن', href: '/products?type=hydrogen-gen' },
      { id: 'nitrogen', label: 'ژنراتور نیتروژن', href: '/products?type=nitrogen-gen' },
      { id: 'zero-air', label: 'ژنراتور هوای صفر', href: '/products?type=zero-air-gen' },
    ],
  },
  {
    id: 'lab-pumps',
    label: 'پمپ‌های آزمایشگاهی',
    description: 'کنترل دقیق فشار و دبی برای انتقال سیالات حساس در شرایط صنعتی.',
    icon: FlaskConical,
    href: '/products?category=lab-pumps',
    subcategories: [
      { id: 'dosing', label: 'پمپ دوزینگ', href: '/products?type=dosing-pump' },
      { id: 'vacuum', label: 'پمپ وکیوم', href: '/products?type=vacuum-pump' },
      { id: 'peristaltic', label: 'پمپ پریستالتیک', href: '/products?type=peristaltic-pump' },
    ],
  },
  {
    id: 'gas-detectors',
    label: 'دتکتورهای گاز',
    description: 'ایمنی عملیاتی با سنسورهای ثابت و پرتابل سازگار با محیط‌های سخت.',
    icon: ShieldCheck,
    badge: 'ATEX',
    href: '/products?category=gas-detectors',
    subcategories: [
      { id: 'fixed', label: 'دتکتور ثابت', href: '/products?type=fixed-detector' },
      { id: 'portable', label: 'دتکتور پرتابل', href: '/products?type=portable-detector' },
      { id: 'atex', label: 'دتکتور تاییدیه ATEX', href: '/products?type=atex-detector' },
    ],
  },
  {
    id: 'flow-control',
    label: 'کنترل جریان',
    description: 'راهکارهای مانیتورینگ و کنترل جرمی/حجمی برای سیستم‌های فرایندی.',
    icon: Activity,
    badge: 'CE',
    href: '/products?category=flow-control',
    subcategories: [
      {
        id: 'mfc',
        label: 'Mass Flow Controller',
        href: '/products?type=mass-flow-controller',
      },
      {
        id: 'magnetic',
        label: 'فلومتر الکترومغناطیسی',
        href: '/products?type=magnetic-flowmeter',
      },
      { id: 'rotameter', label: 'روتامتر صنعتی', href: '/products?type=rotameter' },
    ],
  },
  {
    id: 'plc-automation',
    label: 'PLC و اتوماسیون',
    description: 'کنترل هوشمند فرایند با PLC صنعتی، HMI و شبکه‌های پایدار کنترل.',
    icon: Cpu,
    badge: 'CE',
    href: '/products?category=plc-automation',
    subcategories: [
      { id: 'siemens', label: 'PLC Siemens', href: '/products?type=siemens-plc' },
      { id: 'delta', label: 'PLC Delta', href: '/products?type=delta-plc' },
      { id: 'hmi', label: 'Industrial HMI', href: '/products?type=industrial-hmi' },
    ],
  },
];

export function MegaMenu({ item, onClose }: MegaMenuProps) {
  const [activeGroupId, setActiveGroupId] = useState(industrialCategories[0].id);

  const activeGroup = useMemo(
    () => industrialCategories.find((group) => group.id === activeGroupId) ?? industrialCategories[0],
    [activeGroupId],
  );

  if (item.id !== 'industrial-equipment') {
    return null;
  }

  return (
    <div id="industrial-mega-menu" className="hidden lg:block absolute left-0 right-0 top-full z-[100] border-t border-white/10 bg-[#0F172A]/90 backdrop-blur-xl shadow-2xl shadow-black/30">
      <div className="mx-auto max-w-[1380px] px-6 py-8">
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن منوی تجهیزات صنعتی"
            className="inline-flex items-center gap-1 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
          >
            بستن
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-[25%_55%_20%] gap-6">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-3">
            {industrialCategories.map((group) => {
              const Icon = group.icon;
              const isActive = activeGroup.id === group.id;

              return (
                <button
                  key={group.id}
                  onMouseEnter={() => setActiveGroupId(group.id)}
                  onFocus={() => setActiveGroupId(group.id)}
                  onClick={() => setActiveGroupId(group.id)}
                  className={cn(
                    'group relative isolate flex w-full items-center justify-between overflow-hidden rounded-xl px-3 py-3 text-right transition-colors duration-200',
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white',
                  )}
                >
                  <div
                    className={cn(
                      'absolute inset-0 -z-10 rounded-xl border transition-all duration-300',
                      isActive
                        ? 'border-cyan-300/60 bg-gradient-to-l from-cyan-400/15 via-transparent to-transparent shadow-[inset_0_0_0_1px_rgba(6,182,212,0.35)]'
                        : 'border-transparent bg-transparent group-hover:bg-white/5',
                    )}
                  />
                  <motion.div
                    className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-gradient-to-l from-cyan-400/20 to-transparent"
                    initial={false}
                    animate={{ x: isActive ? 0 : 30, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                  />

                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Icon className="h-4 w-4 text-cyan-300" />
                    {group.label}
                  </span>
                  {group.badge && (
                    <span className="rounded-full border border-amber-300/50 bg-amber-300/10 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                      {group.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white">{activeGroup.label}</h4>
                    <p className="mt-1 text-sm text-slate-300">{activeGroup.description}</p>
                  </div>
                  {activeGroup.badge && (
                    <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-200">
                      استاندارد {activeGroup.badge}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {activeGroup.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      to={sub.href}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-lg border border-white/10 bg-[#111b33]/80 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
                    >
                      <span className="font-medium">{sub.label}</span>
                      <ChevronLeft className="h-4 w-4 text-cyan-300/80 transition group-hover:-translate-x-0.5" />
                    </Link>
                  ))}
                </div>

                <Link
                  to={activeGroup.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  مشاهده همه محصولات {activeGroup.label}
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="rounded-2xl border border-cyan-300/20 bg-[#121f3a] p-5">
            <div className="mb-5 inline-flex rounded-xl border border-cyan-300/40 bg-cyan-400/10 p-3">
              <Gauge className="h-6 w-6 text-cyan-300" />
            </div>
            <h4 className="text-sm font-bold text-white">پشتیبانی فنی پروژه</h4>
            <p className="mt-2 text-xs leading-6 text-slate-300">
              برای انتخاب دقیق تجهیز متناسب با فشار، دبی و الزامات ایمنی سایت، با تیم مهندسی ما در ارتباط باشید.
            </p>
            <Link
              to="/contact"
              onClick={onClose}
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-300 transition hover:text-amber-200"
            >
              درخواست مشاوره تخصصی
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
