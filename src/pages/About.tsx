import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateOrganizationSchema } from '@/lib/structured-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Target, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'تعهد به کیفیت',
      description: 'ارائه تجهیزات با کیفیت و استاندارد جهانی، همراه با گارانتی معتبر'
    },
    {
      icon: Globe,
      title: 'دانش روز',
      description: 'به‌روز بودن با آخرین فناوری‌ها و تجهیزات آزمایشگاهی دنیا'
    },
    {
      icon: Users,
      title: 'مشتری‌مداری',
      description: 'پاسخگویی سریع و حرفه‌ای به نیازهای مشتریان در هر زمان'
    },
    {
      icon: Award,
      title: 'تخصص فنی',
      description: 'تیم متخصص با دانش فنی بالا در حوزه تجهیزات آزمایشگاهی'
    }
  ];

  const organizationSchema = generateOrganizationSchema({
    name: 'آزمایشگاه پیشرفته',
    url: 'https://azlab.ir',
    logo: 'https://azlab.ir/logo.png',
    description: 'تأمین‌کننده تجهیزات آزمایشگاهی پیشرفته با بیش از ۱۵ سال تجربه',
    address: {
      addressLocality: 'تهران',
      addressCountry: 'ایران'
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="درباره ما"
        description="شرکت آزمایشگاه پیشرفته با بیش از ۱۵ سال تجربه در تأمین تجهیزات آزمایشگاهی پیشرفته، خدمات‌رسانی به بیش از ۱۰۰ مرکز تحقیقاتی و صنعتی در سراسر ایران"
        keywords="درباره آزمایشگاه پیشرفته, تجهیزات آزمایشگاهی, تأمین‌کننده تجهیزات"
        structuredData={organizationSchema}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              همراه شما در مسیر پیشرفت علمی
            </h1>
            <p className="text-xl text-primary-foreground/90">
              شرکت آزمایشگاه پیشرفته با هدف تأمین تجهیزات آزمایشگاهی با کیفیت و ارائه خدمات فنی تخصصی، در خدمت مراکز تحقیقاتی و صنعتی کشور است.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">داستان ما</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  شرکت آزمایشگاه پیشرفته از سال ۱۳۸۸ فعالیت خود را در زمینه تأمین تجهیزات آزمایشگاهی آغاز کرد. با درک عمیق نیازهای آزمایشگاه‌های تحقیقاتی و صنعتی کشور، ما همواره در تلاش بوده‌ایم تا بهترین تجهیزات را با قیمت مناسب و خدمات پس از فروش عالی ارائه دهیم.
                </p>
                <p>
                  تیم ما متشکل از مهندسان و کارشناسان متخصص است که سال‌ها تجربه در حوزه تجهیزات آزمایشگاهی دارند. این تخصص به ما امکان می‌دهد تا مشاوره فنی دقیق و راهنمایی صحیح برای انتخاب تجهیزات مناسب ارائه دهیم.
                </p>
                <p>
                  امروز با افتخار به بیش از ۱۰۰ مرکز تحقیقاتی، دانشگاه و شرکت صنعتی خدمات‌رسانی می‌کنیم و بیش از ۵۰۰ دستگاه آزمایشگاهی را نصب و راه‌اندازی کرده‌ایم.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">ارزش‌های ما</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اصولی که در تمام فعالیت‌های ما جاری است
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg ml-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">{value.title}</CardTitle>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">مزایای همکاری با ما</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">گارانتی معتبر</h3>
                    <p className="text-sm text-muted-foreground">
                      تمام محصولات با گارانتی رسمی و خدمات پس از فروش ارائه می‌شوند
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">پشتیبانی فنی</h3>
                    <p className="text-sm text-muted-foreground">
                      تیم فنی متخصص برای پشتیبانی و رفع مشکلات در کمترین زمان
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">آموزش تخصصی</h3>
                    <p className="text-sm text-muted-foreground">
                      آموزش کامل اپراتورها پس از نصب و راه‌اندازی تجهیزات
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">تیم ما</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مهندسان، کارشناسان فنی و متخصصان با تجربه که متعهد به ارائه بهترین خدمات هستند
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">
                  تیم ما متشکل از متخصصان حوزه تجهیزات آزمایشگاهی است که سال‌ها تجربه در زمینه نصب، راه‌اندازی و پشتیبانی دستگاه‌های پیشرفته دارند.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
