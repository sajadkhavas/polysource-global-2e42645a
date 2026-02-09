import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  Zap,
  Globe,
  FileText,
  Award,
  Clock,
  Users,
  CheckCircle2,
  ArrowLeft,
  Flame,
  Droplets,
  AlertTriangle,
  Activity,
  Cpu,
  Settings,
  Factory,
  Wrench,
  HardHat,
  Waves,
} from 'lucide-react';

const toPersianDigits = (value: string) =>
  value.replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]);

function CountUp({ end, prefix = '', suffix = '', className }: { end: number; prefix?: string; suffix?: string; className?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const duration = 1200;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end]);

  return <p ref={ref} className={className}>{toPersianDigits(`${prefix}${count}${suffix}`)}</p>;
}

export default function Home() {
  const categories = [
    {
      title: 'ژنراتورهای گاز',
      description: 'هیدروژن، نیتروژن و هوای خشک با خلوص بالا',
      icon: Flame,
      link: '/products?category=gas-generators'
    },
    {
      title: 'پمپ‌های آزمایشگاهی',
      description: 'خلاء، پریستالتیک و دیافراگمی',
      icon: Droplets,
      link: '/products?category=lab-pumps'
    },
    {
      title: 'دتکتورهای گاز',
      description: 'سمی، قابل اشتعال و چند گازی با تاییدیه ATEX',
      icon: AlertTriangle,
      link: '/products?category=gas-detectors'
    },
    {
      title: 'فلومتر و فلوکنترلر',
      description: 'الکترومغناطیسی، اولتراسونیک و مس فلوکنترلر',
      icon: Activity,
      link: '/products?category=flow-meters'
    },
    {
      title: 'تجهیزات PLC',
      description: 'Siemens، Delta، ماژول I/O و پنل HMI',
      icon: Cpu,
      link: '/products?category=plc-equipment'
    }
  ];

  const valueProps = [
    {
      title: 'گارانتی و خدمات',
      description: 'گارانتی معتبر و خدمات پس از فروش حرفه‌ای برای تمام تجهیزات صنعتی',
      icon: Shield
    },
    {
      title: 'مشاوره تخصصی',
      description: 'مشاوره رایگان توسط مهندسان ابزار دقیق برای انتخاب بهترین تجهیزات',
      icon: Users
    },
    {
      title: 'نصب و کمیسیونینگ',
      description: 'نصب تخصصی، راه‌اندازی و کمیسیونینگ تجهیزات توسط تیم مجرب',
      icon: Wrench
    },
    {
      title: 'پشتیبانی ۲۴/۷',
      description: 'پاسخگویی سریع و پشتیبانی فنی شبانه‌روزی برای خطوط تولید',
      icon: Clock
    }
  ];

  const industries = [
    { name: 'نفت و گاز', icon: Flame },
    { name: 'پتروشیمی', icon: Factory },
    { name: 'داروسازی', icon: Shield },
    { name: 'نیروگاه', icon: Zap },
    { name: 'آب و فاضلاب', icon: Droplets },
    { name: 'معادن', icon: HardHat }
  ];

  const organizationSchema = generateOrganizationSchema({
    name: 'پارس ابزار دقیق',
    url: 'https://parsid.ir',
    logo: 'https://parsid.ir/logo.png',
    description: 'تأمین‌کننده تجهیزات ابزار دقیق و اتوماسیون صنعتی شامل ژنراتور گاز، پمپ، دتکتور، فلومتر و PLC',
    address: {
      addressLocality: 'تهران',
      addressCountry: 'ایران'
    },
    contactPoint: {
      telephone: '+98 21 XXXX XXXX',
      email: 'info@parsid.ir',
      contactType: 'فروش و پشتیبانی فنی'
    }
  });

  const websiteSchema = generateWebSiteSchema('پارس ابزار دقیق', 'https://parsid.ir');

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO
        title="تجهیزات ابزار دقیق و اتوماسیون صنعتی"
        description="تأمین‌کننده تجهیزات ابزار دقیق و اتوماسیون صنعتی: ژنراتور گاز H₂/N₂، پمپ خلاء، دتکتور گاز ATEX، فلومتر و فلوکنترلر، PLC زیمنس و دلتا. گارانتی و پشتیبانی فنی."
        keywords="ابزار دقیق, اتوماسیون صنعتی, ژنراتور نیتروژن, پمپ خلاء, دتکتور گاز, فلومتر, PLC, زیمنس"
        structuredData={[organizationSchema, websiteSchema]}
      />

      <section className="relative text-primary-foreground py-20 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.15),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(96,165,250,0.12),transparent_40%)]" />
        {[...Array(12)].map((_, idx) => (
          <motion.span
            key={`particle-${idx}`}
            className="absolute h-1 w-1 rounded-full bg-accent/70"
            style={{ top: `${10 + idx * 7}%`, right: `${6 + (idx % 4) * 22}%` }}
            animate={{ y: [0, -14, 0], opacity: [0.2, 0.95, 0.2] }}
            transition={{ duration: 3 + idx * 0.2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.12 }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.14 } }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
              <Badge className="mb-5 bg-accent text-accent-foreground border-none font-bold shadow-[0_0_28px_rgba(245,158,11,0.4)]">
                <Settings className="h-3 w-3 ml-1" />
                ابزار دقیق و اتوماسیون صنعتی
              </Badge>
            </motion.div>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight"
            >
              تأمین تجهیزات صنعتی با <span className="text-accent">دقت</span> و <span className="text-accent">ایمنی</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="text-xl md:text-2xl mb-8 text-primary-foreground/85 max-w-3xl"
            >
              ارائه‌دهنده ژنراتورهای گاز، پمپ‌های آزمایشگاهی، دتکتورهای گاز، فلومتر و تجهیزات PLC با پشتیبانی فنی تخصصی
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="cta">
                <Link to="/products">مشاهده محصولات</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">درخواست مشاوره فنی</Link>
              </Button>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-8 flex flex-wrap gap-6 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Shield className="h-4 w-4 text-accent" />
                تاییدیه <span className="font-bold text-accent">ATEX</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Award className="h-4 w-4" />
                گارانتی اصالت کالا
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Globe className="h-4 w-4" />
                خدمات سراسر ایران
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-card/80 backdrop-blur border-b border-border/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 2000, prefix: '+', label: 'پروژه اجرا شده' },
              { value: 500, prefix: '+', label: 'مشتری صنعتی' },
              { value: 20, suffix: '+', label: 'سال تجربه' },
              { value: 24, suffix: '/7', label: 'پشتیبانی فنی' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} className="text-3xl md:text-4xl font-black font-mono text-foreground mb-1 tracking-tight" />
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">دسته‌بندی تجهیزات صنعتی</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">مجموعه‌ای کامل از تجهیزات ابزار دقیق و اتوماسیون برای صنایع مختلف</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full cursor-pointer group relative overflow-hidden border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.15)] before:absolute before:inset-0 before:rounded-lg before:border before:border-white/25 before:pointer-events-none after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-10 after:w-3/4 after:bg-accent/30 after:blur-2xl after:opacity-0 hover:after:opacity-100 transition-all duration-300 hover:-translate-y-1">
                  <Link to={category.link}>
                    <CardHeader>
                      <motion.div
                        className="p-3 bg-primary/10 rounded-xl w-fit mb-3 border border-white/20"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                      >
                        <category.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                      </motion.div>
                      <CardTitle className="text-base group-hover:text-accent transition-colors">{category.title}</CardTitle>
                      <CardDescription className="text-xs">{category.description}</CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">چرا پارس ابزار دقیق؟</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">شریک فنی مطمئن شما در تأمین، نصب و پشتیبانی تجهیزات صنعتی</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border/60">
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg ml-4">
                        <prop.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2 text-base">{prop.title}</CardTitle>
                        <CardDescription>{prop.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">صنایع تحت پوشش</h2>
            <p className="text-lg text-muted-foreground">تأمین تجهیزات ابزار دقیق برای صنایع حیاتی کشور</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="text-center p-4 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm hover:border-accent/50 transition-colors">
                  <industry.icon className="h-8 w-8 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
                  <p className="text-xs font-semibold text-muted-foreground group-hover:text-foreground">{industry.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-accent text-accent font-bold">خدمات ما</Badge>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">خدمات جامع صنعتی</h2>
              <p className="text-lg text-muted-foreground mb-6">از مشاوره اولیه تا نصب، کمیسیونینگ و پشتیبانی مادام‌العمر</p>
              <ul className="space-y-3 mb-8">
                {[
                  'مشاوره تخصصی و مهندسی تجهیزات',
                  'نصب، راه‌اندازی و کمیسیونینگ',
                  'کالیبراسیون و تعمیرات دوره‌ای',
                  'آموزش تخصصی اپراتورها و مهندسان',
                  'تأمین قطعات یدکی اصلی',
                ].map(service => (
                  <li key={service} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="cta">
                <Link to="/contact">
                  درخواست خدمات
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center border border-slate-700/60 shadow-2xl relative overflow-hidden">
                <motion.div className="absolute h-56 w-56 rounded-full border border-accent/30" animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }} />
                <motion.div className="absolute h-40 w-40 rounded-full border border-primary-foreground/20" animate={{ rotate: -360 }} transition={{ duration: 11, repeat: Infinity, ease: 'linear' }} />
                <svg viewBox="0 0 220 220" className="h-52 w-52">
                  <defs>
                    <linearGradient id="meter" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(96,165,250,0.9)" />
                      <stop offset="100%" stopColor="rgba(245,158,11,0.9)" />
                    </linearGradient>
                  </defs>
                  <circle cx="110" cy="110" r="70" fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="14" />
                  <motion.circle
                    cx="110"
                    cy="110"
                    r="70"
                    fill="none"
                    stroke="url(#meter)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray="440"
                    initial={{ strokeDashoffset: 440 }}
                    whileInView={{ strokeDashoffset: 120 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: 'easeOut' }}
                    transform="rotate(-110 110 110)"
                  />
                </svg>
                <Waves className="absolute h-10 w-10 text-accent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">منابع فنی و مستندات</h2>
            <p className="text-lg text-muted-foreground">دیتاشیت‌ها، کاتالوگ‌ها و راهنماهای فنی تجهیزات</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-border/60">
              <CardHeader>
                <FileText className="h-8 w-8 text-accent mb-3" />
                <CardTitle>کاتالوگ محصولات</CardTitle>
                <CardDescription>دانلود کاتالوگ کامل تجهیزات ابزار دقیق و اتوماسیون</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 text-accent">
                  <Link to="/resources">دسترسی به منابع ←</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <Settings className="h-8 w-8 text-accent mb-3" />
                <CardTitle>مقالات تخصصی</CardTitle>
                <CardDescription>راهنماهای انتخاب تجهیزات و مقالات فنی صنعتی</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 text-accent">
                  <Link to="/blog">مطالعه مقالات ←</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <Award className="h-8 w-8 text-accent mb-3" />
                <CardTitle>استانداردها</CardTitle>
                <CardDescription>انطباق با استانداردهای ATEX, IECEx, ISO و CE</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 text-accent">
                  <Link to="/sustainability">مشاهده گواهینامه‌ها ←</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">پروژه صنعتی جدید دارید؟</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">با مهندسان ما مشورت کنید. مشاوره اولیه رایگان است.</p>
          <Button asChild size="lg" variant="cta">
            <Link to="/contact">درخواست مشاوره رایگان</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
