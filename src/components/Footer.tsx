import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-border/60">
          {/* Company */}
          <div className="pt-8 lg:pt-0 lg:pl-8 first:pt-0">
            <h3 className="font-black text-foreground mb-4 text-sm uppercase tracking-wide">شرکت</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  دانش فنی و مقالات
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="pt-8 lg:pt-0 lg:px-8">
            <h3 className="font-black text-foreground mb-4 text-sm uppercase tracking-wide">تجهیزات</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=gas-generators" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ژنراتورهای گاز
                </Link>
              </li>
              <li>
                <Link to="/products?category=lab-pumps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  پمپ‌های آزمایشگاهی
                </Link>
              </li>
              <li>
                <Link to="/products?category=gas-detectors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  دتکتورهای گاز
                </Link>
              </li>
              <li>
                <Link to="/products?category=flow-meters" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  فلومتر و فلوکنترلر
                </Link>
              </li>
              <li>
                <Link to="/products?category=plc-equipment" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  تجهیزات PLC
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="pt-8 lg:pt-0 lg:px-8">
            <h3 className="font-black text-foreground mb-4 text-sm uppercase tracking-wide">خدمات</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  دیتاشیت و کاتالوگ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  استعلام قیمت
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  استانداردها و گواهینامه‌ها
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="pt-8 lg:pt-0 lg:pr-8">
            <h3 className="font-black text-foreground mb-4 text-sm uppercase tracking-wide">تماس</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 ml-2 mt-0.5 flex-shrink-0" />
                <span>تهران، ایران</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 ml-2 flex-shrink-0" />
                <a href="mailto:info@parsid.ir" className="hover:text-foreground transition-colors ltr">
                  info@parsid.ir
                </a>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 ml-2 flex-shrink-0" />
                <span className="ltr">+98 21 XXXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} پارس ابزار دقیق. تمامی حقوق محفوظ است.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                حریم خصوصی
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                شرایط استفاده
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
