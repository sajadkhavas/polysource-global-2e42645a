export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  description?: string;
  children?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
  {
    id: 'industrial-equipment',
    label: 'تجهیزات صنعتی',
    href: '/products',
    icon: 'Settings',
    description: 'مرور کامل تجهیزات ابزار دقیق و اتوماسیون صنعتی',
    children: [
      {
        id: 'gas-generators',
        label: 'ژنراتورهای گاز',
        href: '/products?category=gas-generators',
        icon: 'Flame',
        description: 'ژنراتورهای هیدروژن، نیتروژن و هوای خشک',
        children: [
          { id: 'hydrogen-gen', label: 'ژنراتور هیدروژن (H₂)', href: '/products?type=hydrogen-gen' },
          { id: 'nitrogen-gen', label: 'ژنراتور نیتروژن (N₂)', href: '/products?type=nitrogen-gen' },
          { id: 'dry-air-gen', label: 'ژنراتور هوای خشک', href: '/products?type=dry-air-gen' },
        ]
      },
      {
        id: 'lab-pumps',
        label: 'پمپ‌های آزمایشگاهی',
        href: '/products?category=lab-pumps',
        icon: 'Droplets',
        description: 'پمپ‌های خلاء، پریستالتیک و دیافراگمی',
        children: [
          { id: 'vacuum-pump', label: 'پمپ خلاء روتاری', href: '/products?type=vacuum-pump' },
          { id: 'peristaltic-pump', label: 'پمپ پریستالتیک', href: '/products?type=peristaltic-pump' },
          { id: 'diaphragm-pump', label: 'پمپ دیافراگمی', href: '/products?type=diaphragm-pump' },
        ]
      },
      {
        id: 'gas-detectors',
        label: 'دتکتورهای گاز',
        href: '/products?category=gas-detectors',
        icon: 'AlertTriangle',
        description: 'دتکتورهای گاز سمی، قابل اشتعال و پرتابل',
        children: [
          { id: 'toxic-detector', label: 'دتکتور گاز سمی', href: '/products?type=toxic-detector' },
          { id: 'flammable-detector', label: 'دتکتور گاز قابل اشتعال', href: '/products?type=flammable-detector' },
          { id: 'multi-gas', label: 'دتکتور چند گازی پرتابل', href: '/products?type=multi-gas' },
        ]
      },
      {
        id: 'flow-meters',
        label: 'فلومتر و فلوکنترلر',
        href: '/products?category=flow-meters',
        icon: 'Activity',
        description: 'فلومترها، مس فلوکنترلرها و ابزار اندازه‌گیری جریان',
        children: [
          { id: 'electromagnetic-flow', label: 'فلومتر الکترومغناطیسی', href: '/products?type=electromagnetic-flow' },
          { id: 'mass-flow-controller', label: 'فلوکنترلر جرمی (MFC)', href: '/products?type=mass-flow-controller' },
          { id: 'ultrasonic-flow', label: 'فلومتر اولتراسونیک', href: '/products?type=ultrasonic-flow' },
        ]
      },
      {
        id: 'plc-equipment',
        label: 'تجهیزات PLC',
        href: '/products?category=plc-equipment',
        icon: 'Cpu',
        description: 'ماژول‌های PLC، CPU و پنل‌های HMI',
        children: [
          { id: 'plc-cpu', label: 'ماژول CPU (Siemens/Delta)', href: '/products?type=plc-cpu' },
          { id: 'plc-io', label: 'ماژول ورودی/خروجی (I/O)', href: '/products?type=plc-io' },
          { id: 'hmi-panel', label: 'پنل HMI', href: '/products?type=hmi-panel' },
        ]
      }
    ]
  },
  {
    id: 'services',
    label: 'خدمات',
    href: '/services',
    children: [
      { id: 'consulting', label: 'مشاوره فنی و انتخاب تجهیزات', href: '/services#consulting' },
      { id: 'installation', label: 'نصب، راه‌اندازی و کمیسیونینگ', href: '/services#installation' },
      { id: 'calibration', label: 'کالیبراسیون و تعمیرات', href: '/services#calibration' },
      { id: 'training', label: 'آموزش و دوره‌های تخصصی', href: '/services#training' },
    ]
  },
  {
    id: 'insights',
    label: 'دانش فنی',
    href: '/blog',
    children: [
      { id: 'technical-articles', label: 'مقالات تخصصی', href: '/blog?category=technical' },
      { id: 'news', label: 'اخبار صنعت', href: '/blog?category=news' },
    ]
  },
  {
    id: 'about',
    label: 'درباره ما',
    href: '/about',
    children: [
      { id: 'company', label: 'معرفی شرکت', href: '/about#company' },
      { id: 'team', label: 'تیم ما', href: '/about#team' },
      { id: 'contact', label: 'تماس با ما', href: '/contact' },
    ]
  }
];
