import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Download, FileText, Shield } from 'lucide-react';
import { SEO } from '@/components/SEO';

interface Resource {
  id: string;
  title: string;
  type: 'کاتالوگ' | 'دیتاشیت' | 'راهنما';
  product: string;
  model: string;
  lastUpdated: string;
}

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'دیتاشیت کالریمتر روبشی تفاضلی DSC-250',
    type: 'دیتاشیت',
    product: 'کالریمتر روبشی تفاضلی',
    model: 'DSC-250',
    lastUpdated: '2024-01-15'
  },
  {
    id: '2',
    title: 'راهنمای کاربری DSC-250',
    type: 'راهنما',
    product: 'کالریمتر روبشی تفاضلی',
    model: 'DSC-250',
    lastUpdated: '2024-01-15'
  },
  {
    id: '3',
    title: 'دیتاشیت آنالایزر TGA-550',
    type: 'دیتاشیت',
    product: 'آنالایزر وزن‌سنجی حرارتی',
    model: 'TGA-550',
    lastUpdated: '2024-02-01'
  },
  {
    id: '4',
    title: 'کاتالوگ طیف‌سنج‌های FTIR',
    type: 'کاتالوگ',
    product: 'طیف‌سنج مادون‌قرمز',
    model: 'FTIR-4700',
    lastUpdated: '2024-01-20'
  },
  {
    id: '5',
    title: 'دیتاشیت میکروسکوپ SEM-7500',
    type: 'دیتاشیت',
    product: 'میکروسکوپ الکترونی روبشی',
    model: 'SEM-7500',
    lastUpdated: '2024-02-10'
  },
  {
    id: '6',
    title: 'راهنمای کالیبراسیون دستگاه کشش UTM-5000',
    type: 'راهنما',
    product: 'دستگاه کشش یونیورسال',
    model: 'UTM-5000',
    lastUpdated: '2024-01-25'
  }
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = mockResources.filter(resource =>
    resource.title.includes(searchQuery) ||
    resource.product.includes(searchQuery) ||
    resource.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'دیتاشیت':
        return <FileText className="h-4 w-4" />;
      case 'راهنما':
        return <Shield className="h-4 w-4" />;
      case 'کاتالوگ':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'دیتاشیت':
        return 'default';
      case 'راهنما':
        return 'secondary';
      case 'کاتالوگ':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="منابع فنی"
        description="دانلود دیتاشیت، کاتالوگ و راهنمای کاربری تجهیزات آزمایشگاهی. مستندات فنی برای تمام محصولات."
        keywords="دیتاشیت, کاتالوگ, راهنمای کاربری, مستندات فنی"
      />
      {/* Hero */}
      <section className="bg-muted/50 py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-foreground">منابع فنی</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              دانلود دیتاشیت‌ها، کاتالوگ‌ها و راهنماهای کاربری تمام محصولات. تمام مستندات به‌روز و مطابق با استانداردهای بین‌المللی هستند.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40 backdrop-blur bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="جستجو بر اساس نام محصول یا مدل..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
          </div>
        </div>
      </section>

      {/* Resource Types Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="text-lg">دیتاشیت</CardTitle>
                <CardDescription>
                  مشخصات فنی کامل و ویژگی‌های محصولات
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="text-lg">کاتالوگ</CardTitle>
                <CardDescription>
                  معرفی کامل محصولات و خانواده تجهیزات
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="text-lg">راهنمای کاربری</CardTitle>
                <CardDescription>
                  آموزش استفاده، نگهداری و کالیبراسیون
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              نمایش {filteredResources.length} سند
            </p>
          </div>

          <div className="space-y-4">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={getTypeBadgeVariant(resource.type)}>
                            {getTypeIcon(resource.type)}
                            <span className="mr-1">{resource.type}</span>
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            آخرین به‌روزرسانی: {new Date(resource.lastUpdated).toLocaleDateString('fa-IR')}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{resource.product}</p>
                        <p className="text-xs font-mono text-muted-foreground ltr">{resource.model}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 ml-2" />
                        دانلود PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">سندی یافت نشد</h3>
              <p className="text-muted-foreground">عبارت جستجو را تغییر دهید</p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>نیاز به سند خاصی دارید؟</CardTitle>
              <CardDescription>
                سندی که به دنبال آن هستید را پیدا نکردید؟ با ما تماس بگیرید:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• دیتاشیت با مشخصات خاص</li>
                <li>• گواهینامه‌های کالیبراسیون</li>
                <li>• مستندات انطباق با استانداردها</li>
                <li>• راهنماهای آموزشی تخصصی</li>
              </ul>
              <Button>تماس با پشتیبانی فنی</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
