"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layout, Newspaper, ChefHat, Terminal } from "lucide-react";

const projects = [
  {
    title: "CookIt",
    category: "تطبيق موبايل (AI)",
    description: "تطبيق يدعم الذكاء الاصطناعي لاكتشاف وصفات جديدة بناءً على المكونات المتوفرة. يقدم خطوات واضحة واقتراحات بديلة.",
    link: "http://cookit.3aai.in/",
    icon: <ChefHat className="w-10 h-10 text-orange-400" />,
    tech: ["AI", "Cross-Platform", "BaaS"],
  },
  {
    title: "3A-AI News",
    category: "مدونة تقنية",
    description: "مدونة تقدم محتوى متجدد حول التكنولوجيا الحديثة والذكاء الاصطناعي للمطورين العرب.",
    link: "https://news.3aai.in/",
    icon: <Newspaper className="w-10 h-10 text-blue-400" />,
    tech: ["WordPress", "SEO", "Analytics"],
  },
  {
    title: "Prompt Engineer",
    category: "منصة أدوات AI",
    description: "أدوات ذكاء اصطناعي جاهزة (توليد أوامر، محرك أفكار، محول أكواد) لمساعدة المستخدمين على زيادة الإنتاجية.",
    link: "#", // No link provided in brief for this specifically, or implies main site tool. Keeping # for now or main domain.
    icon: <Terminal className="w-10 h-10 text-green-400" />,
    tech: ["Prompt Engineering", "GenAI", "Tools"],
  },
  {
    title: "Cook It Web",
    category: "تطبيق ويب",
    description: "نسخة ويب خفيفة وسريعة من CookIt مبنية بإطار Astro، مناسبة للشاشات الكبيرة.",
    link: "https://cookit.3aai.in/",
    icon: <Layout className="w-10 h-10 text-purple-400" />,
    tech: ["Astro", "BaaS", "Responsive"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-purple-400 tracking-wide uppercase">أعمالنا</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            مشاريع صنعت <span className="text-gradient">بإتقان</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors group"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white/10 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 mb-4">
                  {project.category}
                </span>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
