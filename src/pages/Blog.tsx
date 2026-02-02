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
    title: 'راهنمای انتخاب دستگاه DSC مناسب برای آزمایشگاه شما',
    excerpt: 'آشنایی با پارامترهای مهم در انتخاب کالریمتر روبشی تفاضلی (DSC) بر اساس نوع نمونه‌ها و کاربرد آزمایشگاه',
    category: 'راهنمای خرید',
    date: '2024-02-15',
    readTime: '۸ دقیقه'
  },
  {
    id: '2',
    title: 'مقایسه روش‌های اسپکتروسکوپی: FTIR در برابر رامان',
    excerpt: 'بررسی تفاوت‌ها، مزایا و معایب طیف‌سنجی مادون‌قرمز و رامان در شناسایی مواد',
    category: 'مقاله تخصصی',
    date: '2024-02-10',
    readTime: '۱۰ دقیقه'
  },
  {
    id: '3',
    title: 'نکات مهم در نگهداری و کالیبراسیون دستگاه‌های TGA',
    excerpt: 'راهنمای عملی برای حفظ دقت و افزایش طول عمر دستگاه‌های آنالیز وزن‌سنجی حرارتی',
    category: 'راهنمای فنی',
    date: '2024-02-05',
    readTime: '۶ دقیقه'
  },
  {
    id: '4',
    title: 'کاربرد میکروسکوپ الکترونی SEM در تحلیل نانومواد',
    excerpt: 'معرفی تکنیک‌های تصویربرداری SEM و کاربردهای آن در پژوهش‌های نانو',
    category: 'مقاله تخصصی',
    date: '2024-01-28',
    readTime: '۱۲ دقیقه'
  },
  {
    id: '5',
    title: 'معرفی دستگاه‌های آنالیز مکانیکی دینامیکی (DMA)',
    excerpt: 'آشنایی با اصول کار، کاربردها و نکات مهم در استفاده از دستگاه DMA',
    category: 'معرفی محصول',
    date: '2024-01-20',
    readTime: '۷ دقیقه'
  },
  {
    id: '6',
    title: 'تفسیر نتایج آزمون کشش: از داده تا تحلیل',
    excerpt: 'راهنمای جامع تفسیر منحنی تنش-کرنش و استخراج پارامترهای مکانیکی مواد',
    category: 'راهنمای فنی',
    date: '2024-01-15',
    readTime: '۹ دقیقه'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="اخبار و مقالات تخصصی"
        description="مقالات تخصصی، راهنماهای خرید و اخبار صنعت تجهیزات آزمایشگاهی. منابع آموزشی برای متخصصان آزمایشگاه."
        keywords="مقالات آزمایشگاهی, راهنمای خرید تجهیزات, اخبار صنعت"
      />
      {/* Hero */}
      <section className="bg-muted/50 py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-foreground">اخبار و مقالات تخصصی</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              راهنماهای کاربردی، مقالات تخصصی و آخرین اخبار صنعت تجهیزات آزمایشگاهی
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">همه مطالب</Badge>
            <Badge variant="outline">راهنمای خرید</Badge>
            <Badge variant="outline">مقاله تخصصی</Badge>
            <Badge variant="outline">راهنمای فنی</Badge>
            <Badge variant="outline">معرفی محصول</Badge>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
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
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
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
                      <div className="mt-4 flex items-center text-sm text-primary font-medium">
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

      {/* Newsletter CTA */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle>عضویت در خبرنامه</CardTitle>
              <CardDescription>
                آخرین مقالات تخصصی و اخبار صنعت را مستقیماً در ایمیل خود دریافت کنید
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background ltr text-left"
                  dir="ltr"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  عضویت
                </button>
              </form>
              <p className="text-xs text-center text-muted-foreground mt-3">
                هر زمان می‌توانید لغو عضویت کنید
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
