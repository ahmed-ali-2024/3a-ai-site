"use client";

import { motion } from "framer-motion";
import { Brain, Smartphone, Server, Globe, GraduationCap, Code } from "lucide-react";

const services = [
  {
    title: "حلول الذكاء الاصطناعي",
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    description: "هندسة الأوامر، دمج نماذج LLMs، روبوتات الدعم، وتحليل النصوص.",
    details: ["هندسة الأوامر (Prompt Engineering)", "أنظمة سؤال–وجواب", "محركات توصيات ذكية", "مساعدات تعليمية تفاعلية"]
  },
  {
    title: "تطبيقات متعددة المنصات",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    description: "تطبيقات Android و iOS بأداء مرتفع وواجهات حديثة.",
    details: ["تصميم وتطوير التطبيقات", "إدارة الحالة", "التكامل مع الـ APIs", "التجهيز للإطلاق في المتاجر"]
  },
  {
    title: "Backend as a Service",
    icon: <Server className="w-8 h-8 text-blue-400" />,
    description: "بنية خلفية سريعة وجاهزة باستخدام Firebase و Supabase.",
    details: ["قواعد بيانات فورية", "المصادقة والأمان", "وظائف سحابية (Functions)", "تكامل سلس"]
  },
  {
    title: "تطوير مواقع الويب",
    icon: <Globe className="w-8 h-8 text-green-400" />,
    description: "مواقع شخصية، مدونات، ومتاجر إلكترونية متكاملة.",
    details: ["مواقع تعريفية", "مدونات تقنية (SEO)", "متاجر إلكترونية", "لوحات تحكم"]
  },
  {
    title: "التدريب والاستشارات",
    icon: <GraduationCap className="w-8 h-8 text-yellow-400" />,
    description: "نقل الخبرة في مجالات الذكاء الاصطناعي والبرمجة.",
    details: ["هندسة الأوامر", "الذكاء الاصطناعي التوليدي", "بناء المنتجات الرقمية", "تقنيات Multi-Platform"]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">خدماتنا</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            ماذا نقدم في <span className="text-gradient">3A-AI</span>؟
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            نغطي مراحل البناء الرقمي من الفكرة وحتى الإطلاق بأعلى معايير الجودة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 min-h-[48px]">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
