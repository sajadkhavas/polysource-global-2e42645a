import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Microscope, 
  Shield, 
  Zap, 
  Globe, 
  FileText, 
  Truck,
  Award,
  Target,
  Clock,
  Users,
  CheckCircle2,
  ArrowLeft,
  Thermometer,
  Waves,
  Search as SearchIcon,
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
      title: 'تحلیل حرارتی',
      description: 'DSC، TGA، DMA و آنالایزرهای حرارتی',
      icon: Thermometer,
      link: '/products?category=thermal'
    },
    {
      title: 'اسپکتروسکوپی',
      description: 'FTIR، UV-Vis، رامان و طیف‌سنج‌ها',
      icon: Waves,
      link: '/products?category=spectroscopy'
    },
    {
      title: 'میکروسکوپی',
      description: 'SEM، TEM، AFM و میکروسکوپ‌های نوری',
      icon: SearchIcon,
      link: '/products?category=microscopy'
    },
    {
      title: 'آزمون مواد',
      description: 'دستگاه کشش، سختی‌سنج و رئومتر',
      icon: Gauge,
      link: '/products?category=testing'
    }
  ];

  const valueProps = [
    {
      title: 'گارانتی و خدمات',
      description: 'گارانتی معتبر و خدمات پس از فروش حرفه‌ای برای تمام محصولات',
      icon: Shield
    },
    {
      title: 'مشاوره تخصصی',
      description: 'مشاوره رایگان برای انتخاب بهترین تجهیزات متناسب با نیاز شما',
      icon: Users
    },
    {
      title: 'نصب و آموزش',
      description: 'نصب تخصصی و آموزش کامل اپراتورها توسط کارشناسان مجرب',
      icon: Award
    },
    {
      title: 'پشتیبانی سریع',
      description: 'پاسخگویی سریع به درخواست‌ها و رفع مشکلات در کمترین زمان',
      icon: Clock
    }
  ];

  const industries = [
    { name: 'دانشگاه‌ها', icon: Target },
    { name: 'پتروشیمی', icon: Zap },
    { name: 'داروسازی', icon: Shield },
    { name: 'پلیمر', icon: Microscope },
    { name: 'فلزات', icon: Gauge },
    { name: 'نانو', icon: SearchIcon }
  ];

  const organizationSchema = generateOrganizationSchema({
    name: 'آزمایشگاه پیشرفته',
    url: 'https://azlab.ir',
    logo: 'https://azlab.ir/logo.png',
    description: 'تأمین‌کننده تجهیزات آزمایشگاهی پیشرفته شامل دستگاه‌های تحلیل حرارتی، اسپکتروسکوپی و میکروسکوپی',
    address: {
      addressLocality: 'تهران',
      addressCountry: 'ایران'
    },
    contactPoint: {
      telephone: '+98 21 XXXX XXXX',
      email: 'info@azlab.ir',
      contactType: 'خدمات مشتریان'
    }
  });

  const websiteSchema = generateWebSiteSchema('آزمایشگاه پیشرفته', 'https://azlab.ir');

  return (
    <div className="min-h-screen">
      <SEO
        title="تجهیزات آزمایشگاهی پیشرفته"
        description="تأمین‌کننده تجهیزات آزمایشگاهی پیشرفته شامل دستگاه‌های تحلیل حرارتی DSC، TGA، اسپکتروسکوپی FTIR، میکروسکوپی SEM و آزمون مواد. گارانتی و پشتیبانی فنی."
        keywords="تجهیزات آزمایشگاهی, DSC, TGA, FTIR, SEM, میکروسکوپ, طیف‌سنج, آنالیز حرارتی"
        structuredData={[organizationSchema, websiteSchema]}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl"
            {...fadeInUp}
          >
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              تجهیزات آزمایشگاهی پیشرفته
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              تأمین تجهیزات آزمایشگاهی با کیفیت و گارانتی معتبر
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl">
              ارائه‌دهنده تجهیزات تحلیل حرارتی، اسپکتروسکوپی، میکروسکوپی و آزمون مواد با پشتیبانی فنی تخصصی و خدمات پس از فروش
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/products">مشاهده محصولات</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">درخواست مشاوره</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/80 flex items-center">
              <Globe className="h-4 w-4 ml-2" />
              خدمات‌رسانی به سراسر ایران
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar / Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">+۵۰۰</p>
              <p className="text-sm text-muted-foreground">دستگاه نصب‌شده</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">+۱۰۰</p>
              <p className="text-sm text-muted-foreground">مشتری فعال</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">۱۵+</p>
              <p className="text-sm text-muted-foreground">سال تجربه</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">۲۴/۷</p>
              <p className="text-sm text-muted-foreground">پشتیبانی فنی</p>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              دسته‌بندی تجهیزات آزمایشگاهی
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مجموعه‌ای کامل از تجهیزات تحلیل و آنالیز برای آزمایشگاه‌های تحقیقاتی و صنعتی
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <Link to={category.link}>
                    <CardHeader>
                      <category.icon className="h-10 w-10 mb-4 text-primary" />
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              چرا آزمایشگاه پیشرفته را انتخاب کنید؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ما فراتر از یک تأمین‌کننده تجهیزات هستیم. شریک فنی شما در مسیر موفقیت آزمایشگاه
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg ml-4">
                        <prop.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">{prop.title}</CardTitle>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              خدمات‌رسانی به صنایع مختلف
            </h2>
            <p className="text-lg text-muted-foreground">
              تأمین تجهیزات آزمایشگاهی برای مراکز تحقیقاتی و صنعتی سراسر کشور
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
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <industry.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-medium text-sm">{industry.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-success/5 border-y border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-success text-success">
                خدمات ما
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                خدمات جامع آزمایشگاهی
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                از مشاوره اولیه تا نصب، آموزش و پشتیبانی مادام‌العمر، همراه شما هستیم.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">مشاوره تخصصی و انتخاب تجهیزات</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">نصب و راه‌اندازی تخصصی</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">آموزش کامل اپراتورها</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">کالیبراسیون و تعمیرات دوره‌ای</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="border-success text-success hover:bg-success hover:text-success-foreground">
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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center">
                <Microscope className="h-32 w-32 text-success" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              منابع فنی و آموزشی
            </h2>
            <p className="text-lg text-muted-foreground">
              دیتاشیت‌ها، راهنماهای کاربری و مقالات تخصصی
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-3" />
                <CardTitle>کاتالوگ محصولات</CardTitle>
                <CardDescription>
                  دانلود کاتالوگ کامل تجهیزات آزمایشگاهی با مشخصات فنی
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link to="/resources">دسترسی به منابع ←</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Microscope className="h-8 w-8 text-primary mb-3" />
                <CardTitle>راهنمای انتخاب</CardTitle>
                <CardDescription>
                  راهنمای انتخاب دستگاه مناسب برای کاربرد شما
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link to="/blog">مطالعه راهنما ←</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-3" />
                <CardTitle>اخبار و مقالات</CardTitle>
                <CardDescription>
                  آخرین مقالات تخصصی و اخبار صنعت تجهیزات آزمایشگاهی
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link to="/blog">مشاهده وبلاگ ←</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              آماده‌اید آزمایشگاه خود را ارتقا دهید؟
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              با کارشناسان ما تماس بگیرید و مشاوره رایگان دریافت کنید
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">درخواست مشاوره رایگان</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">مشاهده محصولات</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
