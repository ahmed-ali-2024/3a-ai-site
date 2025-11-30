"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Zap, Target } from "lucide-react";

export default function Vision() {
  const values = [
    { name: "تسريع التطوير", icon: <Zap className="w-6 h-6" /> },
    { name: "تقليل التكلفة", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "رفع الإنتاجية", icon: <Target className="w-6 h-6" /> },
    { name: "قيمة حقيقية", icon: <Lightbulb className="w-6 h-6" /> },
  ];

  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
              رؤية <span className="text-gradient">3A-AI</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              نهدف إلى تقديم خدمات حديثة وعملية تساعد الأفراد والشركات على تحويل الأفكار إلى واقع ملموس.
              نؤمن بأن التكنولوجيا يجب أن تكون ممكنة، سريعة، وذات جدوى اقتصادية.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                  <div className="text-blue-400">{item.icon}</div>
                  <span className="font-medium text-white">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-2xl flex items-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
              <div className="text-center z-10 flex flex-col items-center justify-center h-full">
                <div className="relative h-24 w-64 mb-4">
                  <img
                    src="/logo.png"
                    alt="3A-AI Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-blue-200">Artificial Intelligence & App Innovation</p>
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
