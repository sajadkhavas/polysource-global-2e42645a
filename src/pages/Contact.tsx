import { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, MapPin, Phone, Clock, CheckCircle2, Upload, X } from 'lucide-react';
import { useRFQ } from '@/contexts/RFQContext';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { products, removeProduct, clearProducts } = useRFQ();
  const { toast } = useToast();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    city: '',
    phone: '',
    equipment: '',
    timeline: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "درخواست ثبت شد",
      description: "کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.",
    });
    setFormData({
      name: '',
      company: '',
      email: '',
      city: '',
      phone: '',
      equipment: '',
      timeline: '',
      requirements: ''
    });
    clearProducts();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="درخواست مشاوره"
        description="درخواست مشاوره رایگان برای انتخاب تجهیزات آزمایشگاهی. کارشناسان ما آماده پاسخگویی به سوالات شما هستند."
        keywords="درخواست مشاوره, خرید تجهیزات آزمایشگاهی, تماس با ما"
      />
      {/* Hero */}
      <section className="bg-muted/50 py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-foreground">درخواست مشاوره</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              فرم زیر را تکمیل کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند و مشاوره رایگان ارائه دهند.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>فرم درخواست مشاوره</CardTitle>
                  <CardDescription>
                    فیلدهای ستاره‌دار الزامی هستند *
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Selected Products */}
                    {products.length > 0 && (
                      <div>
                        <Label>محصولات انتخاب‌شده ({products.length})</Label>
                        <div className="mt-2 space-y-2">
                          {products.map(product => (
                            <div key={product.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                              <div>
                                <p className="font-medium text-sm">{product.name}</p>
                                <p className="text-xs text-muted-foreground">{product.grade}</p>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeProduct(product.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Required Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">نام و نام خانوادگی *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="نام کامل"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">نام سازمان/شرکت *</Label>
                        <Input
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="نام سازمان یا دانشگاه"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">ایمیل *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="example@company.com"
                          className="ltr text-left"
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">شماره تماس *</Label>
                        <Input
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          className="ltr text-left"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="city">شهر *</Label>
                      <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="انتخاب شهر" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tehran">تهران</SelectItem>
                          <SelectItem value="mashhad">مشهد</SelectItem>
                          <SelectItem value="isfahan">اصفهان</SelectItem>
                          <SelectItem value="tabriz">تبریز</SelectItem>
                          <SelectItem value="shiraz">شیراز</SelectItem>
                          <SelectItem value="other">سایر شهرها</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {products.length === 0 && (
                      <div>
                        <Label htmlFor="equipment">تجهیزات مورد نیاز *</Label>
                        <Textarea
                          id="equipment"
                          required={products.length === 0}
                          placeholder="مثلاً: دستگاه DSC، طیف‌سنج FTIR، میکروسکوپ SEM"
                          rows={2}
                        />
                      </div>
                    )}

                    {/* Advanced Section Toggle */}
                    <div>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className="w-full"
                      >
                        {showAdvanced ? 'پنهان کردن' : 'نمایش'} اطلاعات تکمیلی (اختیاری)
                      </Button>
                    </div>

                    {/* Advanced Fields */}
                    {showAdvanced && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-4 pt-4 border-t border-border"
                      >
                        <div>
                          <Label htmlFor="timeline">زمان‌بندی خرید</Label>
                          <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="انتخاب زمان‌بندی" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">فوری (کمتر از ۱ ماه)</SelectItem>
                              <SelectItem value="1month">طی ۱ تا ۳ ماه</SelectItem>
                              <SelectItem value="flexible">زمان‌بندی منعطف</SelectItem>
                              <SelectItem value="research">فقط تحقیق و بررسی</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="requirements">توضیحات تکمیلی</Label>
                          <Textarea
                            id="requirements"
                            value={formData.requirements}
                            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                            placeholder="مشخصات خاص مورد نیاز، سوالات فنی، یا هر توضیح دیگری..."
                            rows={4}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Submit */}
                    <div className="flex items-start gap-2">
                      <Checkbox id="privacy" required />
                      <Label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                        با ثبت این فرم، موافقت خود را با سیاست حفظ حریم خصوصی اعلام می‌کنم *
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      ثبت درخواست مشاوره
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      <Clock className="inline h-3 w-3 ml-1" />
                      کارشناسان ما در کمتر از ۲۴ ساعت با شما تماس خواهند گرفت
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>اطلاعات تماس</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary ml-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">آدرس</p>
                      <p className="text-sm text-muted-foreground">
                        تهران، ایران
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary ml-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">ایمیل</p>
                      <a href="mailto:info@azlab.ir" className="text-sm text-primary hover:underline ltr">
                        info@azlab.ir
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary ml-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">تلفن</p>
                      <p className="text-sm text-muted-foreground ltr">
                        +98 21 XXXX XXXX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary ml-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">ساعات کاری</p>
                      <p className="text-sm text-muted-foreground">
                        شنبه تا چهارشنبه: ۹ تا ۱۸
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle>خدمات ما</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success ml-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      مشاوره رایگان برای انتخاب تجهیزات
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success ml-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      ارائه قیمت شفاف و بدون هزینه پنهان
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success ml-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      گارانتی معتبر و خدمات پس از فروش
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success ml-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      نصب و راه‌اندازی تخصصی
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success ml-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      آموزش کامل اپراتورها
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
