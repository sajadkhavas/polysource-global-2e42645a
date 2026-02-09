import type { EquipmentType } from './product-taxonomy';

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
    pressure?: string;
    flowRate?: string;
    purity?: string;
    gasType?: string;
    voltage?: string;
    protocol?: string;
    ioCount?: string;
    certification?: string;
  };
}

export const products: Product[] = [
  // ──── Gas Generators ────
  {
    id: 'ng-500',
    name: 'ژنراتور نیتروژن NG-500',
    model: 'NG-500',
    type: 'nitrogen-gen',
    category: 'gas-generators',
    brand: 'Parker Hannifin',
    applications: ['GC-MS', 'LCMS', 'آنالیز عنصری', 'بلانکتینگ'],
    inStock: true,
    description: 'ژنراتور نیتروژن با خلوص بالا برای کاربردهای آزمایشگاهی و صنعتی',
    specs: {
      purity: '99.999%',
      flowRate: '0-500 mL/min',
      pressure: '0-100 psi',
      accuracy: '±0.1%',
    }
  },
  {
    id: 'ng-1000',
    name: 'ژنراتور نیتروژن صنعتی NG-1000',
    model: 'NG-1000',
    type: 'nitrogen-gen',
    category: 'gas-generators',
    brand: 'Parker Hannifin',
    applications: ['صنایع غذایی', 'الکترونیک', 'متالورژی', 'بسته‌بندی'],
    inStock: true,
    description: 'ژنراتور نیتروژن صنعتی با ظرفیت بالا و عملکرد مداوم ۲۴/۷',
    specs: {
      purity: '99.99%',
      flowRate: '0-1000 mL/min',
      pressure: '0-150 psi',
      accuracy: '±0.05%',
    }
  },
  {
    id: 'hg-300',
    name: 'ژنراتور هیدروژن HG-300',
    model: 'HG-300',
    type: 'hydrogen-gen',
    category: 'gas-generators',
    brand: 'Peak Scientific',
    applications: ['GC', 'FID', 'سوخت سلولی', 'آزمایشگاه'],
    inStock: true,
    description: 'ژنراتور هیدروژن ایمن با فناوری PEM برای دستگاه‌های GC',
    specs: {
      purity: '99.9999%',
      flowRate: '0-300 mL/min',
      pressure: '0-100 psi',
      accuracy: '±0.5%',
    }
  },
  {
    id: 'ag-200',
    name: 'ژنراتور هوای خشک AG-200',
    model: 'AG-200',
    type: 'dry-air-gen',
    category: 'gas-generators',
    brand: 'Peak Scientific',
    applications: ['FTIR', 'TOC', 'آنالیز رطوبت', 'خشک‌سازی'],
    inStock: false,
    description: 'ژنراتور هوای خشک بدون روغن با نقطه شبنم پایین',
    specs: {
      flowRate: '0-200 L/min',
      pressure: '0-120 psi',
      accuracy: '±1%',
    }
  },

  // ──── Lab Pumps ────
  {
    id: 'vp-100',
    name: 'پمپ خلاء روتاری VP-100',
    model: 'VP-100',
    type: 'vacuum-pump',
    category: 'lab-pumps',
    brand: 'Edwards',
    applications: ['تقطیر خلاء', 'خشک‌سازی', 'فیلتراسیون', 'SEM'],
    inStock: true,
    description: 'پمپ خلاء روتاری دو مرحله‌ای با عملکرد بالا و صدای کم',
    specs: {
      flowRate: '100 L/min',
      pressure: '10⁻³ mbar',
      voltage: '220V / 50Hz',
      accuracy: '±2%',
    }
  },
  {
    id: 'pp-50',
    name: 'پمپ پریستالتیک PP-50',
    model: 'PP-50',
    type: 'peristaltic-pump',
    category: 'lab-pumps',
    brand: 'Watson-Marlow',
    applications: ['انتقال سیال', 'دوز‌بندی', 'فیلتراسیون', 'بیوتکنولوژی'],
    inStock: true,
    description: 'پمپ پریستالتیک دیجیتال با کنترل دقیق دبی و سرعت متغیر',
    specs: {
      flowRate: '0.1-3400 mL/min',
      pressure: '0-3 bar',
      voltage: '110-240V',
      accuracy: '±0.5%',
    }
  },
  {
    id: 'dp-80',
    name: 'پمپ دیافراگمی DP-80',
    model: 'DP-80',
    type: 'diaphragm-pump',
    category: 'lab-pumps',
    brand: 'KNF',
    applications: ['انتقال گاز', 'نمونه‌برداری', 'خلاء ملایم', 'شیمی'],
    inStock: true,
    description: 'پمپ دیافراگمی بدون روغن مقاوم در برابر خوردگی',
    specs: {
      flowRate: '80 L/min',
      pressure: '0-2 bar (فشار) / 100 mbar (خلاء)',
      voltage: '220V / 50Hz',
      accuracy: '±3%',
    }
  },

  // ──── Gas Detectors ────
  {
    id: 'gd-4x',
    name: 'دتکتور چند گازی پرتابل GD-4X',
    model: 'GD-4X',
    type: 'multi-gas',
    category: 'gas-detectors',
    brand: 'Dräger',
    applications: ['ایمنی صنعتی', 'ورود به فضای بسته', 'پتروشیمی', 'معادن'],
    inStock: true,
    description: 'دتکتور پرتابل ۴ گازی با تاییدیه ATEX برای محیط‌های خطرناک',
    specs: {
      gasType: 'O₂, LEL, CO, H₂S',
      accuracy: '±5% قرائت',
      certification: 'ATEX Zone 0, IECEx',
    }
  },
  {
    id: 'gd-fix',
    name: 'دتکتور گاز ثابت GD-FIX',
    model: 'GD-FIX',
    type: 'flammable-detector',
    category: 'gas-detectors',
    brand: 'Honeywell',
    applications: ['پالایشگاه', 'کارخانه', 'انبار گاز', 'نیروگاه'],
    inStock: true,
    description: 'دتکتور گاز ثابت کاتالیتیک برای نصب دائم در محیط‌های صنعتی',
    specs: {
      gasType: 'گازهای قابل اشتعال (CH₄, C₃H₈)',
      accuracy: '±3% LEL',
      certification: 'ATEX, SIL 2',
      protocol: '4-20 mA / HART',
    }
  },
  {
    id: 'gd-tox',
    name: 'دتکتور گاز سمی GD-TOX',
    model: 'GD-TOX',
    type: 'toxic-detector',
    category: 'gas-detectors',
    brand: 'MSA Safety',
    applications: ['آزمایشگاه شیمی', 'بیمارستان', 'صنایع شیمیایی', 'تصفیه‌خانه'],
    inStock: false,
    description: 'دتکتور گاز سمی الکتروشیمیایی با حساسیت بسیار بالا',
    specs: {
      gasType: 'CO, NO₂, Cl₂, NH₃, SO₂',
      accuracy: '±2 ppm',
      certification: 'ATEX, UL',
    }
  },

  // ──── Flow Meters & Controllers ────
  {
    id: 'fm-200',
    name: 'فلومتر الکترومغناطیسی FM-200',
    model: 'FM-200',
    type: 'electromagnetic-flow',
    category: 'flow-meters',
    brand: 'Endress+Hauser',
    applications: ['آب و فاضلاب', 'شیمیایی', 'غذایی', 'دارویی'],
    inStock: true,
    description: 'فلومتر الکترومغناطیسی دقیق برای اندازه‌گیری مایعات رسانا',
    specs: {
      range: 'DN10 تا DN2000',
      flowRate: '0-10000 m³/h',
      accuracy: '±0.2%',
      protocol: 'HART / Modbus / Profibus',
    }
  },
  {
    id: 'fc-100',
    name: 'فلوکنترلر جرمی MFC-100',
    model: 'MFC-100',
    type: 'mass-flow-controller',
    category: 'flow-meters',
    brand: 'Bronkhorst',
    applications: ['CVD', 'اسپاترینگ', 'آزمایشگاه', 'نیمه‌هادی'],
    inStock: true,
    description: 'فلوکنترلر جرمی حرارتی با کنترل دقیق گاز برای فرآیندهای حساس',
    specs: {
      range: '0.1 sccm تا 50 slm',
      accuracy: '±0.5% مقدار واقعی',
      protocol: 'RS-485 / Modbus / EtherCAT',
      pressure: '0-10 bar',
    }
  },
  {
    id: 'fm-ul',
    name: 'فلومتر اولتراسونیک FM-UL',
    model: 'FM-UL',
    type: 'ultrasonic-flow',
    category: 'flow-meters',
    brand: 'SICK',
    applications: ['گاز طبیعی', 'بخار', 'هوای فشرده', 'فلر'],
    inStock: true,
    description: 'فلومتر اولتراسونیک غیرتماسی برای اندازه‌گیری بدون توقف خط',
    specs: {
      range: 'DN25 تا DN3000',
      accuracy: '±1%',
      protocol: 'Modbus / HART',
    }
  },

  // ──── PLC Equipment ────
  {
    id: 'plc-s7-1500',
    name: 'ماژول CPU زیمنس S7-1500',
    model: 'S7-1500',
    type: 'plc-cpu',
    category: 'plc-equipment',
    brand: 'Siemens',
    applications: ['اتوماسیون کارخانه', 'خطوط تولید', 'کنترل فرآیند', 'SCADA'],
    inStock: true,
    description: 'پردازنده PLC سری S7-1500 زیمنس با عملکرد بالا و امنیت یکپارچه',
    specs: {
      ioCount: 'حداکثر 65536 نقطه',
      protocol: 'PROFINET / PROFIBUS / OPC UA',
      accuracy: '±0.01%',
    }
  },
  {
    id: 'plc-delta-as',
    name: 'PLC سری AS دلتا',
    model: 'Delta-AS',
    type: 'plc-cpu',
    category: 'plc-equipment',
    brand: 'Delta Electronics',
    applications: ['ماشین‌آلات', 'بسته‌بندی', 'CNC', 'کنترل حرکت'],
    inStock: true,
    description: 'PLC فشرده و قدرتمند سری AS دلتا مناسب برای اتوماسیون متوسط',
    specs: {
      ioCount: 'حداکثر 1024 نقطه',
      protocol: 'EtherNet/IP / Modbus / CANopen',
      accuracy: '±0.05%',
    }
  },
  {
    id: 'plc-io-sm',
    name: 'ماژول ورودی/خروجی SM-1231',
    model: 'SM-1231',
    type: 'plc-io',
    category: 'plc-equipment',
    brand: 'Siemens',
    applications: ['اندازه‌گیری آنالوگ', 'مانیتورینگ', 'جمع‌آوری داده', 'کنترل'],
    inStock: true,
    description: 'ماژول ورودی آنالوگ ۸ کاناله با رزولوشن ۱۶ بیت',
    specs: {
      ioCount: '8 AI / 16-bit',
      range: '±10V / 0-20mA / 4-20mA',
      accuracy: '±0.1%',
    }
  },
  {
    id: 'hmi-10',
    name: 'پنل HMI ده اینچ TP-1000',
    model: 'TP-1000',
    type: 'hmi-panel',
    category: 'plc-equipment',
    brand: 'Siemens',
    applications: ['واسط اپراتور', 'مانیتورینگ', 'کنترل فرآیند', 'خط تولید'],
    inStock: true,
    description: 'پنل لمسی HMI ده اینچ با نمایشگر TFT و ارتباط چندگانه',
    specs: {
      resolution: '1024×600 پیکسل',
      protocol: 'PROFINET / Ethernet / USB',
    }
  },
];
