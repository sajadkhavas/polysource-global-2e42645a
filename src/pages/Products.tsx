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
import { Search, Filter, Microscope, CheckCircle } from 'lucide-react';
import { useRFQ } from '@/contexts/RFQContext';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { products, type Product } from '@/data/products';
import { productCategories, polymerTypes } from '@/data/product-taxonomy';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const { addProduct } = useRFQ();
  const { toast } = useToast();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.model.toLowerCase().includes(searchQuery.toLowerCase());
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
      title: "به سبد درخواست اضافه شد",
      description: `${product.name} به لیست درخواست شما اضافه شد.`,
    });
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">دسته‌بندی</h3>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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

      <div>
        <h3 className="font-semibold mb-3">نوع دستگاه</h3>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger>
            <SelectValue placeholder="همه انواع" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            <SelectItem value="all">همه انواع</SelectItem>
            {Object.entries(polymerTypes).map(([key, type]) => (
              <SelectItem key={key} value={key}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Checkbox 
            id="instock" 
            checked={showInStockOnly}
            onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
          />
          <Label htmlFor="instock" className="cursor-pointer">فقط موجود</Label>
        </div>
      </div>
    </div>
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'خانه', url: 'https://azlab.ir' },
    { name: 'محصولات', url: 'https://azlab.ir/products' }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="کاتالوگ محصولات"
        description="مشاهده کامل تجهیزات آزمایشگاهی پیشرفته شامل دستگاه‌های تحلیل حرارتی، اسپکتروسکوپی، میکروسکوپی و آزمون مواد"
        keywords="تجهیزات آزمایشگاهی, DSC, TGA, FTIR, SEM, میکروسکوپ, طیف‌سنج"
        structuredData={breadcrumbSchema}
      />
      {/* Header */}
      <section className="bg-muted/50 py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">کاتالوگ محصولات</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            مشاهده کامل تجهیزات آزمایشگاهی پیشرفته. تمام دستگاه‌ها با گارانتی و پشتیبانی فنی ارائه می‌شوند.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40 backdrop-blur bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="جستجو بر اساس نام یا مدل..."
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
                  <SheetTitle>فیلترها</SheetTitle>
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
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">فیلترها</CardTitle>
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

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                      <CardHeader className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex gap-2">
                            {product.inStock && (
                              <Badge variant="secondary">
                                <CheckCircle className="h-3 w-3 ml-1" />
                                موجود
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>
                          <span className="font-mono text-xs ltr">{product.model}</span>
                        </CardDescription>
                        <div className="mt-4 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">نوع:</span>
                            <span className="font-medium">{polymerTypes[product.type as keyof typeof polymerTypes]?.label || product.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">برند:</span>
                            <span className="font-medium">{product.brand}</span>
                          </div>
                          {product.specs?.range && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">محدوده:</span>
                              <span className="font-medium ltr text-left">{product.specs.range}</span>
                            </div>
                          )}
                        </div>
                        <div className="mt-4">
                          <p className="text-xs text-muted-foreground mb-2">کاربردها:</p>
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
                            <Link to={`/products/${product.id}`}>جزئیات</Link>
                          </Button>
                          <Button 
                            onClick={() => handleAddToRFQ(product)}
                            size="sm"
                            className="flex-1"
                          >
                            افزودن به سبد
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <Microscope className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">محصولی یافت نشد</h3>
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
