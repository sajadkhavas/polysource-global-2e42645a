import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Search, Filter, Settings, CheckCircle, Download } from 'lucide-react';
import { useRFQ } from '@/contexts/RFQContext';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { products, type Product } from '@/data/products';
import { productCategories, equipmentTypes } from '@/data/product-taxonomy';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const { addProduct } = useRFQ();
  const { toast } = useToast();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesType = selectedType === 'all' || product.type === selectedType;
    const matchesStock = !showInStockOnly || product.inStock;

    return matchesSearch && matchesCategory && matchesType && matchesStock;
  });

  const handleAddToRFQ = (product: Product) => {
    addProduct({
      id: product.id,
      name: product.name,
      type: product.type,
      grade: product.model
    });
    toast({
      title: "به سبد استعلام اضافه شد",
      description: `${product.name} به لیست استعلام شما اضافه شد.`,
    });
  };

  // Get available types for selected category
  const availableTypes = selectedCategory === 'all' 
    ? Object.entries(equipmentTypes) 
    : Object.entries(equipmentTypes).filter(([_, type]) => type.category === selectedCategory);

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="font-bold mb-3 text-sm">دسته‌بندی تجهیزات</h3>
        <Select value={selectedCategory} onValueChange={(val) => { setSelectedCategory(val); setSelectedType('all'); }}>
          <SelectTrigger>
            <SelectValue placeholder="همه دسته‌بندی‌ها" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">همه دسته‌بندی‌ها</SelectItem>
            {Object.entries(productCategories).map(([key, cat]) => (
              <SelectItem key={key} value={key}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Type Filter */}
      <div>
        <h3 className="font-bold mb-3 text-sm">نوع تجهیزات</h3>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger>
            <SelectValue placeholder="همه انواع" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            <SelectItem value="all">همه انواع</SelectItem>
            {availableTypes.map(([key, type]) => (
              <SelectItem key={key} value={key}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Stock Filter */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Checkbox 
            id="instock" 
            checked={showInStockOnly}
            onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
          />
          <Label htmlFor="instock" className="cursor-pointer text-sm">فقط کالای موجود</Label>
        </div>
      </div>

      {/* Technical Specs Info */}
      <div className="p-3 bg-muted/50 rounded-lg border border-border/60">
        <h4 className="font-bold text-xs mb-2 text-foreground">فیلتر فنی پیشرفته</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          برای فیلتر بر اساس مشخصات فنی (فشار، دبی، دقت، پروتکل ارتباطی) روی هر محصول کلیک کنید.
        </p>
      </div>
    </div>
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'خانه', url: 'https://parsid.ir' },
    { name: 'محصولات', url: 'https://parsid.ir/products' }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="کاتالوگ تجهیزات صنعتی"
        description="مشاهده کامل تجهیزات ابزار دقیق و اتوماسیون صنعتی: ژنراتور گاز، پمپ، دتکتور، فلومتر و PLC"
        keywords="تجهیزات صنعتی, ژنراتور نیتروژن, پمپ خلاء, دتکتور گاز, فلومتر, PLC زیمنس"
        structuredData={breadcrumbSchema}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground py-10 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-3">کاتالوگ تجهیزات صنعتی</h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">
            مشاهده و استعلام قیمت تجهیزات ابزار دقیق و اتوماسیون. تمام تجهیزات با گارانتی و دیتاشیت فنی.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-4 bg-background border-b border-border sticky top-16 z-40 backdrop-blur bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="جستجو بر اساس نام، مدل یا برند..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="h-4 w-4 ml-2" />
                  فیلترها
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>فیلترهای فنی</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-32">
                <Card className="border-border/60">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      فیلتر فنی
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FilterSidebar />
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  نمایش {filteredProducts.length} محصول
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all flex flex-col border-border/60 hover:border-accent/30">
                      <CardHeader className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex gap-2">
                            {product.inStock ? (
                              <Badge variant="secondary" className="text-xs">
                                <CheckCircle className="h-3 w-3 ml-1" />
                                موجود
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="text-xs text-muted-foreground">
                                سفارشی
                              </Badge>
                            )}
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-accent" title="دانلود دیتاشیت">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardTitle className="text-base leading-snug">{product.name}</CardTitle>
                        <CardDescription>
                          <span className="font-mono text-xs ltr">{product.model}</span>
                          <span className="mx-2 text-border">|</span>
                          <span className="text-xs">{product.brand}</span>
                        </CardDescription>
                        <div className="mt-4 space-y-1.5 text-sm">
                          {product.specs?.flowRate && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground text-xs">دبی:</span>
                              <span className="font-medium text-xs ltr text-left">{product.specs.flowRate}</span>
                            </div>
                          )}
                          {product.specs?.pressure && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground text-xs">فشار:</span>
                              <span className="font-medium text-xs ltr text-left">{product.specs.pressure}</span>
                            </div>
                          )}
                          {product.specs?.accuracy && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground text-xs">دقت:</span>
                              <span className="font-medium text-xs ltr text-left">{product.specs.accuracy}</span>
                            </div>
                          )}
                          {product.specs?.purity && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground text-xs">خلوص:</span>
                              <span className="font-medium text-xs ltr text-left">{product.specs.purity}</span>
                            </div>
                          )}
                          {product.specs?.protocol && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground text-xs">پروتکل:</span>
                              <span className="font-medium text-xs ltr text-left truncate max-w-[160px]">{product.specs.protocol}</span>
                            </div>
                          )}
                        </div>
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-1">
                            {product.applications.slice(0, 3).map(app => (
                              <Badge key={app} variant="secondary" className="text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex gap-2">
                          <Button asChild variant="outline" className="flex-1" size="sm">
                            <Link to={`/products/${product.id}`}>جزئیات فنی</Link>
                          </Button>
                          <Button 
                            onClick={() => handleAddToRFQ(product)}
                            size="sm"
                            variant="cta"
                            className="flex-1"
                          >
                            استعلام قیمت
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <Settings className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-bold mb-2">محصولی یافت نشد</h3>
                  <p className="text-muted-foreground">فیلترها یا عبارت جستجو را تغییر دهید</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
