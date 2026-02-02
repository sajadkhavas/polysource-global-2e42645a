import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle2, Target, FileText, Users, Globe } from 'lucide-react';

export default function Sustainability() {
  const principles = [
    {
      icon: Target,
      title: 'کیفیت و دقت',
      description: 'ارائه تجهیزات با بالاترین دقت و کیفیت برای نتایج قابل اتکا'
    },
    {
      icon: FileText,
      title: 'استانداردهای جهانی',
      description: 'تمام تجهیزات مطابق با استانداردهای ISO و استانداردهای بین‌المللی'
    },
    {
      icon: Users,
      title: 'آموزش و توانمندسازی',
      description: 'آموزش تخصصی برای استفاده بهینه از تجهیزات و کاهش خطاها'
    },
    {
      icon: Globe,
      title: 'پشتیبانی مداوم',
      description: 'پشتیبانی فنی مداوم برای حفظ عملکرد بهینه تجهیزات'
    }
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 17025',
    'CE Marking',
    'گواهی کالیبراسیون',
    'استاندارد ملی ایران'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="تعهد به کیفیت"
        description="تعهد ما به ارائه تجهیزات با کیفیت، مطابق با استانداردهای جهانی و پشتیبانی مداوم برای مشتریان"
        keywords="کیفیت تجهیزات, استانداردهای ISO, کالیبراسیون, پشتیبانی فنی"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-success/20 to-success/5 py-20 border-b border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-4 border-success text-success">
              <Award className="h-3 w-3 ml-1" />
              تعهد به کیفیت
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              کیفیت، اعتماد، اطمینان
            </h1>
            <p className="text-xl text-muted-foreground">
              ما متعهد به ارائه تجهیزات با کیفیت، مطابق با استانداردهای جهانی و ارائه خدمات پشتیبانی مداوم هستیم.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="p-2 bg-success/10 rounded-lg ml-4">
                        <principle.icon className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">{principle.title}</CardTitle>
                        <CardDescription>{principle.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">گواهینامه‌ها و استانداردها</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {certifications.map(cert => (
                    <Badge key={cert} variant="secondary" className="text-sm">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-success/5 border-y border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-foreground mb-2">+۵۰۰</p>
                <p className="text-sm text-muted-foreground">دستگاه نصب و راه‌اندازی شده</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-foreground mb-2">۹۸٪</p>
                <p className="text-sm text-muted-foreground">رضایت مشتریان</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-foreground mb-2">۲۴/۷</p>
                <p className="text-sm text-muted-foreground">پشتیبانی فنی</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
