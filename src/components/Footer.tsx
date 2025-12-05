"use client";

import { Mail, Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="relative h-12 w-32 mb-4">
              <img
                src="/logo.png"
                alt="3A-AI Logo"
                className="h-full w-full object-contain object-right"
              />
            </div>
            <p className="text-gray-400 max-w-sm">
              نقدم حلول تقنية متكاملة تجمع بين الذكاء الاصطناعي وتطوير البرمجيات لبناء المستقبل الرقمي.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">الخدمات</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">أعمالنا</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@3aai.in" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 ml-2" />
                  support@3aai.in
                </a>
              </li>
              <li className="flex gap-4">
                <a href="https://www.facebook.com/3a4ai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@3A_AI-w2r/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/a3a19819/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} 3A-AI. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
