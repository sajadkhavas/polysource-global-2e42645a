import { ProductCategory, PolymerType } from './product-taxonomy';

export interface Product {
  id: string;
  name: string;
  model: string;
  type: string;
  category: string;
  brand: string;
  applications: string[];
  inStock: boolean;
  description?: string;
  specs?: {
    range?: string;
    accuracy?: string;
    resolution?: string;
  };
}

export const products: Product[] = [
  // Thermal Analysis Equipment
  {
    id: 'dsc-001',
    name: 'کالریمتر روبشی تفاضلی DSC 250',
    model: 'DSC-250',
    type: 'dsc',
    category: 'thermal',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['تحلیل پلیمرها', 'فلزات', 'داروسازی', 'مواد غذایی'],
    inStock: true,
    description: 'دستگاه DSC با دقت بالا برای اندازه‌گیری خواص حرارتی مواد',
    specs: {
      range: '-180°C تا 700°C',
      accuracy: '±0.05°C',
      resolution: '0.01 µW'
    }
  },
  {
    id: 'dsc-002',
    name: 'کالریمتر روبشی تفاضلی DSC 450',
    model: 'DSC-450',
    type: 'dsc',
    category: 'thermal',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['تحقیقات پیشرفته', 'مواد کامپوزیت', 'نانومواد'],
    inStock: true,
    description: 'دستگاه DSC پیشرفته با حساسیت فوق‌العاده',
    specs: {
      range: '-180°C تا 1000°C',
      accuracy: '±0.02°C',
      resolution: '0.001 µW'
    }
  },
  {
    id: 'tga-001',
    name: 'آنالایزر وزن‌سنجی حرارتی TGA 550',
    model: 'TGA-550',
    type: 'tga',
    category: 'thermal',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['تحلیل ترکیبات', 'پایداری حرارتی', 'رطوبت‌سنجی'],
    inStock: true,
    description: 'دستگاه TGA برای تعیین تغییرات وزنی مواد با دما',
    specs: {
      range: 'دمای محیط تا 1000°C',
      accuracy: '±0.1 µg',
      resolution: '0.1 µg'
    }
  },
  {
    id: 'dma-001',
    name: 'آنالایزر مکانیکی دینامیکی DMA 850',
    model: 'DMA-850',
    type: 'dma',
    category: 'thermal',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['خواص ویسکوالاستیک', 'دمای انتقال شیشه‌ای', 'مدول ذخیره'],
    inStock: true,
    description: 'دستگاه DMA برای تحلیل خواص مکانیکی وابسته به دما',
    specs: {
      range: '-190°C تا 600°C',
      accuracy: '±1%',
      resolution: '0.00001 N'
    }
  },

  // Spectroscopy Equipment
  {
    id: 'ftir-001',
    name: 'طیف‌سنج مادون‌قرمز FTIR 4700',
    model: 'FTIR-4700',
    type: 'ftir',
    category: 'spectroscopy',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['شناسایی مواد', 'کنترل کیفیت', 'تحقیقات شیمی'],
    inStock: true,
    description: 'طیف‌سنج FTIR با وضوح بالا و نرم‌افزار پیشرفته',
    specs: {
      range: '350-7800 cm⁻¹',
      accuracy: '±0.01 cm⁻¹',
      resolution: '0.4 cm⁻¹'
    }
  },
  {
    id: 'uvvis-001',
    name: 'اسپکتروفتومتر UV-Vis 3600',
    model: 'UV-3600',
    type: 'uv-vis',
    category: 'spectroscopy',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['تحلیل کمی', 'سینتیک واکنش', 'کنترل کیفیت'],
    inStock: true,
    description: 'طیف‌سنج UV-Vis دو پرتوی با دقت بالا',
    specs: {
      range: '185-3300 nm',
      accuracy: '±0.3 nm',
      resolution: '0.1 nm'
    }
  },
  {
    id: 'raman-001',
    name: 'طیف‌سنج رامان RM-5000',
    model: 'RM-5000',
    type: 'raman',
    category: 'spectroscopy',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['شناسایی مولکولی', 'تحلیل ساختاری', 'نانومواد'],
    inStock: false,
    description: 'طیف‌سنج رامان کانفوکال با لیزر ۵۳۲ نانومتر',
    specs: {
      range: '50-4000 cm⁻¹',
      accuracy: '±0.5 cm⁻¹',
      resolution: '1.5 cm⁻¹'
    }
  },

  // Microscopy Equipment
  {
    id: 'sem-001',
    name: 'میکروسکوپ الکترونی روبشی SEM-7500',
    model: 'SEM-7500',
    type: 'sem',
    category: 'microscopy',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['مورفولوژی سطح', 'آنالیز عنصری', 'نانوساختارها'],
    inStock: true,
    description: 'SEM با وضوح بالا مجهز به EDS و WDS',
    specs: {
      resolution: '0.8 nm',
      range: '×20 تا ×1,000,000',
      accuracy: '±2%'
    }
  },
  {
    id: 'afm-001',
    name: 'میکروسکوپ نیروی اتمی AFM-3100',
    model: 'AFM-3100',
    type: 'afm',
    category: 'microscopy',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['توپوگرافی سطح', 'خواص مکانیکی نانو', 'لایه‌های نازک'],
    inStock: true,
    description: 'AFM پیشرفته با قابلیت‌های تصویربرداری چندگانه',
    specs: {
      resolution: '0.1 nm عمودی',
      range: '100×100 µm',
      accuracy: '±0.1 nm'
    }
  },
  {
    id: 'optical-001',
    name: 'میکروسکوپ نوری پلاریزان PM-600',
    model: 'PM-600',
    type: 'optical',
    category: 'microscopy',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['متالورژی', 'پتروگرافی', 'پلیمرها'],
    inStock: true,
    description: 'میکروسکوپ پلاریزان با دوربین دیجیتال یکپارچه',
    specs: {
      resolution: '0.25 µm',
      range: '×50 تا ×1000',
      accuracy: '±1 µm'
    }
  },

  // Material Testing Equipment
  {
    id: 'tensile-001',
    name: 'دستگاه کشش یونیورسال UTM-5000',
    model: 'UTM-5000',
    type: 'tensile',
    category: 'testing',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['آزمون کشش', 'فشار', 'خمش', 'پلاستیک'],
    inStock: true,
    description: 'دستگاه تست کشش یونیورسال با ظرفیت ۵۰ کیلونیوتن',
    specs: {
      range: '0.5 N تا 50 kN',
      accuracy: '±0.5%',
      resolution: '0.001 N'
    }
  },
  {
    id: 'hardness-001',
    name: 'سختی‌سنج میکرو ویکرز HV-1000',
    model: 'HV-1000',
    type: 'hardness',
    category: 'testing',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['سختی‌سنجی میکرو', 'لایه‌های پوشش', 'قطعات ظریف'],
    inStock: true,
    description: 'سختی‌سنج میکرو با اندازه‌گیری خودکار',
    specs: {
      range: '10-2500 HV',
      accuracy: '±3%',
      resolution: '0.01 HV'
    }
  },
  {
    id: 'rheometer-001',
    name: 'رئومتر چرخشی RH-3000',
    model: 'RH-3000',
    type: 'rheometer',
    category: 'testing',
    brand: 'آزمایشگاه پیشرفته',
    applications: ['ویسکوزیته', 'خواص جریان', 'پلیمر مذاب'],
    inStock: false,
    description: 'رئومتر چرخشی با کنترل دما و استرس',
    specs: {
      range: '10⁻⁷ تا 10⁸ Pa·s',
      accuracy: '±1%',
      resolution: '1 nNm'
    }
  }
];
