import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateOrganizationSchema } from '@/lib/structured-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Target, Users, Award, Factory, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'دقت و اطمینان',
      description: 'ارائه تجهیزات صنعتی با بالاترین دقت و قابلیت اطمینان برای فرآیندهای حیاتی'
    },
    {
      icon: Shield,
      title: 'ایمنی صنعتی',
      description: 'تمامی تجهیزات مطابق با استانداردهای ATEX، IECEx و CE برای محیط‌های خطرناک'
    },
    {
      icon: Users,
      title: 'تیم مهندسی متخصص',
      description: 'مهندسان ابزار دقیق و اتوماسیون با سال‌ها تجربه در پروژه‌های صنعتی'
    },
    {
      icon: Globe,
      title: 'نمایندگی‌های معتبر',
      description: 'نماینده رسمی برندهای جهانی Siemens، Parker، Endress+Hauser و Dräger'
    }
  ];

  const organizationSchema = generateOrganizationSchema({
    name: 'پارس ابزار دقیق',
    url: 'https://parsid.ir',
    logo: 'https://parsid.ir/logo.png',
    description: 'تأمین‌کننده تجهیزات ابزار دقیق و اتوماسیون صنعتی با بیش از ۲۰ سال تجربه',
    address: {
      addressLocality: 'تهران',
      addressCountry: 'ایران'
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="درباره ما"
        description="شرکت پارس ابزار دقیق با بیش از ۲۰ سال تجربه در تأمین تجهیزات ابزار دقیق و اتوماسیون صنعتی، خدمات‌رسانی به صنایع نفت، گاز، پتروشیمی و نیروگاه"
        keywords="درباره پارس ابزار دقیق, تجهیزات ابزار دقیق, اتوماسیون صنعتی"
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
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              شریک مطمئن صنعت ایران
            </h1>
            <p className="text-xl text-primary-foreground/85">
              شرکت پارس ابزار دقیق با هدف تأمین تجهیزات ابزار دقیق و اتوماسیون صنعتی با کیفیت، در خدمت صنایع حیاتی کشور است.
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
              <h2 className="text-3xl font-black mb-6 text-foreground">داستان ما</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  شرکت پارس ابزار دقیق از سال ۱۳۸۳ فعالیت خود را در زمینه تأمین تجهیزات ابزار دقیق و اتوماسیون صنعتی آغاز کرد. با درک عمیق نیازهای صنایع نفت، گاز، پتروشیمی و نیروگاهی کشور، ما همواره بهترین تجهیزات را از برندهای معتبر جهانی ارائه می‌دهیم.
                </p>
                <p>
                  تیم ما متشکل از مهندسان ابزار دقیق، اتوماسیون و کنترل است که تجربه اجرای بیش از ۲۰۰۰ پروژه صنعتی در سراسر کشور را دارند. از مشاوره اولیه تا نصب، کمیسیونینگ و پشتیبانی مادام‌العمر.
                </p>
                <p>
                  امروز با افتخار به بیش از ۵۰۰ مشتری صنعتی خدمات‌رسانی می‌کنیم و نماینده رسمی برندهای Siemens، Parker Hannifin، Endress+Hauser، Dräger و Bronkhorst در ایران هستیم.
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
            <h2 className="text-3xl font-black mb-4 text-foreground">ارزش‌های ما</h2>
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
                <Card className="h-full border-border/60">
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg ml-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2 text-base">{value.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
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
              <h2 className="text-3xl font-black mb-6 text-foreground">مزایای همکاری با ما</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'کالای اصل با گارانتی', desc: 'تمام تجهیزات اصل با سریال نامبر معتبر و گارانتی رسمی' },
                  { title: 'پشتیبانی ۲۴/۷', desc: 'تیم فنی آماده پاسخگویی شبانه‌روزی برای خطوط تولید' },
                  { title: 'نصب و کمیسیونینگ', desc: 'نصب تخصصی، راه‌اندازی و آموزش اپراتورها در محل' },
                ].map(item => (
                  <Card key={item.title} className="border-border/60">
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
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
            <h2 className="text-3xl font-black mb-4 text-foreground">تیم ما</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مهندسان ابزار دقیق، اتوماسیون و کنترل با تجربه اجرای پروژه‌های صنعتی بزرگ
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-border/60">
              <CardContent className="pt-6 text-center">
                <Factory className="h-12 w-12 mx-auto text-primary/40 mb-4" />
                <p className="text-muted-foreground">
                  تیم ما متشکل از مهندسان متخصص ابزار دقیق و اتوماسیون با تجربه اجرای پروژه در صنایع نفت، گاز، پتروشیمی، نیروگاه و معادن است.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
