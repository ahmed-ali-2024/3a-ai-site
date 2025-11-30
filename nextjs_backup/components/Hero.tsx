"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-cyan-400 mb-4">
            المستقبل يبدأ هنا
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            حلول تقنية <span className="text-gradient">متكاملة</span>
            <br />
            تجمع بين الذكاء و الإبداع
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            في 3A-AI ندمج الذكاء الاصطناعي وتطوير البرمجيات لنقدم منتجات عالية الجودة، موثوقة، وسريعة.
            من الفكرة إلى الإطلاق، نحن شركاؤك في النجاح.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                ابدأ مشروعك الآن <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              خدماتنا
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
