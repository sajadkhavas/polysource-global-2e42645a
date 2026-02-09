import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'راهنمای انتخاب ژنراتور نیتروژن مناسب برای آزمایشگاه GC',
    excerpt: 'بررسی پارامترهای کلیدی مانند خلوص، دبی و فشار خروجی در انتخاب ژنراتور نیتروژن برای دستگاه‌های GC و LCMS',
    category: 'راهنمای خرید',
    date: '2024-03-15',
    readTime: '۸ دقیقه'
  },
  {
    id: '2',
    title: 'مقایسه پروتکل‌های ارتباطی صنعتی: HART در برابر Modbus',
    excerpt: 'بررسی مزایا و معایب پروتکل‌های HART، Modbus RTU و Profibus در سیستم‌های ابزار دقیق صنعتی',
    category: 'مقاله تخصصی',
    date: '2024-03-01',
    readTime: '۱۰ دقیقه'
  },
  {
    id: '3',
    title: 'اصول کالیبراسیون فلومترهای الکترومغناطیسی',
    excerpt: 'راهنمای عملی کالیبراسیون و تنظیم فلومترهای الکترومغناطیسی مطابق استاندارد ISO 4185',
    category: 'راهنمای فنی',
    date: '2024-02-20',
    readTime: '۶ دقیقه'
  },
  {
    id: '4',
    title: 'نکات ایمنی در نصب دتکتورهای گاز در محیط‌های ATEX',
    excerpt: 'الزامات و استانداردهای نصب دتکتورهای گاز سمی و قابل اشتعال در مناطق خطرناک Zone 0, 1, 2',
    category: 'ایمنی صنعتی',
    date: '2024-02-10',
    readTime: '۱۲ دقیقه'
  },
  {
    id: '5',
    title: 'معرفی PLC سری S7-1500 زیمنس: ویژگی‌ها و مزایا',
    excerpt: 'بررسی کامل قابلیت‌های PLC زیمنس S7-1500 شامل امنیت سایبری، عملکرد بالا و ارتباط OPC UA',
    category: 'معرفی محصول',
    date: '2024-01-25',
    readTime: '۷ دقیقه'
  },
  {
    id: '6',
    title: 'انتخاب پمپ خلاء مناسب: روتاری، دیافراگمی یا توربو؟',
    excerpt: 'مقایسه انواع پمپ‌های خلاء از نظر میزان خلاء، دبی، عمر مفید و هزینه نگهداری',
    category: 'راهنمای خرید',
    date: '2024-01-15',
    readTime: '۹ دقیقه'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="دانش فنی و مقالات تخصصی"
        description="مقالات تخصصی، راهنماهای خرید و اخبار صنعت ابزار دقیق و اتوماسیون صنعتی"
        keywords="مقالات ابزار دقیق, راهنمای خرید تجهیزات, اتوماسیون صنعتی, ایمنی صنعتی"
      />

      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground py-10 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-black mb-3">دانش فنی و مقالات</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl">
              راهنماهای کاربردی، مقالات تخصصی و آخرین اخبار صنعت ابزار دقیق و اتوماسیون
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">همه مطالب</Badge>
            <Badge variant="outline">راهنمای خرید</Badge>
            <Badge variant="outline">مقاله تخصصی</Badge>
            <Badge variant="outline">راهنمای فنی</Badge>
            <Badge variant="outline">ایمنی صنعتی</Badge>
            <Badge variant="outline">معرفی محصول</Badge>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="h-full hover:shadow-lg transition-all group border-border/60 hover:border-accent/30">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      <CardTitle className="group-hover:text-accent transition-colors line-clamp-2 text-base">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 ml-1" />
                          {new Date(post.date).toLocaleDateString('fa-IR')}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 ml-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-sm text-accent font-bold">
                        مطالعه مقاله
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto border-border/60">
            <CardHeader className="text-center">
              <CardTitle>عضویت در خبرنامه فنی</CardTitle>
              <CardDescription>آخرین مقالات و اخبار صنعت ابزار دقیق در ایمیل شما</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex gap-2">
                <input type="email" placeholder="ایمیل شما" className="flex-1 px-4 py-2 border border-border rounded-lg bg-background ltr text-left" dir="ltr" />
                <button type="submit" className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-bold">عضویت</button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
