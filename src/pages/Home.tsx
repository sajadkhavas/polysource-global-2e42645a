import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Target,
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
  Gauge
} from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

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
    <div className="min-h-screen">
      <SEO
        title="تجهیزات ابزار دقیق و اتوماسیون صنعتی"
        description="تأمین‌کننده تجهیزات ابزار دقیق و اتوماسیون صنعتی: ژنراتور گاز H₂/N₂، پمپ خلاء، دتکتور گاز ATEX، فلومتر و فلوکنترلر، PLC زیمنس و دلتا. گارانتی و پشتیبانی فنی."
        keywords="ابزار دقیق, اتوماسیون صنعتی, ژنراتور نیتروژن, پمپ خلاء, دتکتور گاز, فلومتر, PLC, زیمنس"
        structuredData={[organizationSchema, websiteSchema]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="max-w-4xl"
            {...fadeInUp}
          >
            <Badge className="mb-4 bg-accent text-accent-foreground border-none font-bold">
              <Settings className="h-3 w-3 ml-1" />
              ابزار دقیق و اتوماسیون صنعتی
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              تأمین تجهیزات صنعتی با <span className="text-accent">دقت</span> و <span className="text-accent">ایمنی</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/85 max-w-3xl">
              ارائه‌دهنده ژنراتورهای گاز، پمپ‌های آزمایشگاهی، دتکتورهای گاز، فلومتر و تجهیزات PLC با پشتیبانی فنی تخصصی
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="cta">
                <Link to="/products">مشاهده محصولات</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">درخواست مشاوره فنی</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4" />
                تاییدیه ATEX
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="h-4 w-4" />
                گارانتی اصالت کالا
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="h-4 w-4" />
                خدمات سراسر ایران
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar / Stats */}
      <section className="py-10 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '+۲۰۰۰', label: 'پروژه اجرا شده' },
              { value: '+۵۰۰', label: 'مشتری صنعتی' },
              { value: '۲۰+', label: 'سال تجربه' },
              { value: '۲۴/۷', label: 'پشتیبانی فنی' },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-black text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
              دسته‌بندی تجهیزات صنعتی
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مجموعه‌ای کامل از تجهیزات ابزار دقیق و اتوماسیون برای صنایع مختلف
            </p>
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
                <Card className="h-full hover:shadow-lg transition-all hover:border-accent/40 cursor-pointer group border-border/60">
                  <Link to={category.link}>
                    <CardHeader>
                      <div className="p-2.5 bg-primary/8 rounded-lg w-fit mb-3 group-hover:bg-accent/10 transition-colors">
                        <category.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <CardTitle className="text-base group-hover:text-accent transition-colors">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-xs">{category.description}</CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
              چرا پارس ابزار دقیق؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              شریک فنی مطمئن شما در تأمین، نصب و پشتیبانی تجهیزات صنعتی
            </p>
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

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
              صنایع تحت پوشش
            </h2>
            <p className="text-lg text-muted-foreground">
              تأمین تجهیزات ابزار دقیق برای صنایع حیاتی کشور
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow hover:border-accent/30 border-border/60">
                  <industry.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-bold text-sm">{industry.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-accent text-accent font-bold">
                خدمات ما
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
                خدمات جامع صنعتی
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                از مشاوره اولیه تا نصب، کمیسیونینگ و پشتیبانی مادام‌العمر
              </p>
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
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center border border-primary/10">
                <Gauge className="h-32 w-32 text-primary/60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources / Blog Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
              منابع فنی و مستندات
            </h2>
            <p className="text-lg text-muted-foreground">
              دیتاشیت‌ها، کاتالوگ‌ها و راهنماهای فنی تجهیزات
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-border/60">
              <CardHeader>
                <FileText className="h-8 w-8 text-accent mb-3" />
                <CardTitle>کاتالوگ محصولات</CardTitle>
                <CardDescription>
                  دانلود کاتالوگ کامل تجهیزات ابزار دقیق و اتوماسیون
                </CardDescription>
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
                <CardDescription>
                  راهنماهای انتخاب تجهیزات و مقالات فنی صنعتی
                </CardDescription>
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
                <CardDescription>
                  انطباق با استانداردهای ATEX, IECEx, ISO و CE
                </CardDescription>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            پروژه صنعتی جدید دارید؟
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            با مهندسان ما مشورت کنید. مشاوره اولیه رایگان است.
          </p>
          <Button asChild size="lg" variant="cta">
            <Link to="/contact">درخواست مشاوره رایگان</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
