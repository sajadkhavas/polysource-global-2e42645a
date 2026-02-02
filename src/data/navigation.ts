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
    id: 'lab-equipment',
    label: 'تجهیزات آزمایشگاهی',
    href: '/products',
    icon: 'Microscope',
    description: 'مرور کامل تجهیزات آزمایشگاهی پیشرفته',
    children: [
      {
        id: 'thermal-analysis',
        label: 'تحلیل حرارتی',
        href: '/products?category=thermal',
        icon: 'Thermometer',
        description: 'دستگاه‌های آنالیز حرارتی و کالریمتری',
        children: [
          {
            id: 'dsc',
            label: 'کالریمتری روبشی تفاضلی (DSC)',
            href: '/products?type=dsc'
          },
          {
            id: 'tga',
            label: 'آنالیز وزن‌سنجی حرارتی (TGA)',
            href: '/products?type=tga'
          },
          {
            id: 'dma',
            label: 'آنالیز مکانیکی دینامیکی (DMA)',
            href: '/products?type=dma'
          },
          {
            id: 'tma',
            label: 'آنالیز ترمومکانیکی (TMA)',
            href: '/products?type=tma'
          },
          {
            id: 'sdta',
            label: 'آنالیز حرارتی همزمان (STA)',
            href: '/products?type=sta'
          }
        ]
      },
      {
        id: 'spectroscopy',
        label: 'اسپکتروسکوپی',
        href: '/products?category=spectroscopy',
        icon: 'Waves',
        description: 'طیف‌سنج‌ها و آنالایزرهای نوری',
        children: [
          {
            id: 'ftir',
            label: 'طیف‌سنج مادون‌قرمز (FTIR)',
            href: '/products?type=ftir'
          },
          {
            id: 'uv-vis',
            label: 'طیف‌سنج UV-Vis',
            href: '/products?type=uv-vis'
          },
          {
            id: 'raman',
            label: 'طیف‌سنج رامان',
            href: '/products?type=raman'
          },
          {
            id: 'aas',
            label: 'طیف‌سنج جذب اتمی (AAS)',
            href: '/products?type=aas'
          },
          {
            id: 'icp',
            label: 'اسپکترومتر ICP',
            href: '/products?type=icp'
          }
        ]
      },
      {
        id: 'microscopy',
        label: 'میکروسکوپی',
        href: '/products?category=microscopy',
        icon: 'Search',
        description: 'میکروسکوپ‌های پیشرفته و سیستم‌های تصویربرداری',
        children: [
          {
            id: 'sem',
            label: 'میکروسکوپ الکترونی روبشی (SEM)',
            href: '/products?type=sem'
          },
          {
            id: 'tem',
            label: 'میکروسکوپ الکترونی عبوری (TEM)',
            href: '/products?type=tem'
          },
          {
            id: 'afm',
            label: 'میکروسکوپ نیروی اتمی (AFM)',
            href: '/products?type=afm'
          },
          {
            id: 'optical',
            label: 'میکروسکوپ‌های نوری پیشرفته',
            href: '/products?type=optical'
          },
          {
            id: 'confocal',
            label: 'میکروسکوپ کانفوکال',
            href: '/products?type=confocal'
          }
        ]
      },
      {
        id: 'material-testing',
        label: 'آزمون مواد',
        href: '/products?category=testing',
        icon: 'Gauge',
        description: 'دستگاه‌های تست مکانیکی و فیزیکی',
        children: [
          {
            id: 'tensile',
            label: 'دستگاه کشش یونیورسال',
            href: '/products?type=tensile'
          },
          {
            id: 'hardness',
            label: 'سختی‌سنج',
            href: '/products?type=hardness'
          },
          {
            id: 'impact',
            label: 'دستگاه ضربه',
            href: '/products?type=impact'
          },
          {
            id: 'rheometer',
            label: 'رئومتر',
            href: '/products?type=rheometer'
          },
          {
            id: 'viscometer',
            label: 'ویسکومتر',
            href: '/products?type=viscometer'
          }
        ]
      }
    ]
  },
  {
    id: 'services',
    label: 'خدمات',
    href: '/services',
    children: [
      {
        id: 'consulting',
        label: 'مشاوره فنی و انتخاب تجهیزات',
        href: '/services#consulting'
      },
      {
        id: 'installation',
        label: 'نصب و راه‌اندازی',
        href: '/services#installation'
      },
      {
        id: 'calibration',
        label: 'کالیبراسیون و تعمیرات',
        href: '/services#calibration'
      },
      {
        id: 'training',
        label: 'آموزش و دوره‌های تخصصی',
        href: '/services#training'
      }
    ]
  },
  {
    id: 'insights',
    label: 'اخبار و دانش فنی',
    href: '/blog',
    children: [
      {
        id: 'technical-articles',
        label: 'مقالات تخصصی',
        href: '/blog?category=technical'
      },
      {
        id: 'news',
        label: 'اخبار صنعت',
        href: '/blog?category=news'
      }
    ]
  },
  {
    id: 'about',
    label: 'درباره ما',
    href: '/about',
    children: [
      {
        id: 'company',
        label: 'معرفی شرکت',
        href: '/about#company'
      },
      {
        id: 'team',
        label: 'تیم ما',
        href: '/about#team'
      },
      {
        id: 'contact',
        label: 'تماس با ما',
        href: '/contact'
      }
    ]
  }
];
