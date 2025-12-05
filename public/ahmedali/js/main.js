/**
 * Ahmed Ali Portfolio - Main JavaScript
 * Handles language switching, navigation, and animations
 */

// ========================================
// LANGUAGE SWITCHING
// ========================================

const translations = {
  ar: {
    // Navigation
    nav_home: 'الرئيسية',
    nav_about: 'عني',
    nav_projects: 'المشاريع',
    nav_skills: 'المهارات',
    nav_blog: 'المدونة',
    nav_contact: 'تواصل معي',
    
    // Hero Section
    hero_greeting: 'مرحباً، أنا',
    hero_name: 'أحمد علي عبداللطيف سليمان',
    hero_title: 'مطور التطبيقات متعددة المنصات | مهندس ذكاء اصطناعي',
    hero_description: 'أجمع بين شغف البرمجة وابتكارات الذكاء الاصطناعي لبناء تطبيقات عصرية تخدم المستخدمين. أكثر من 10 سنوات خبرة في المجالات التقنية والإدارية.',
    hero_cta_contact: 'تواصل معي',
    hero_cta_projects: 'شاهد أعمالي',

    // Stats
    stats_projects: 'مشاريع منجزة',
    stats_experience: 'سنوات خبرة',
    stats_technologies: 'تقنية متقنة',
    stats_certifications: 'شهادات معتمدة',
    
    // About Me
    about_badge: 'عني',
    about_title: 'عني',
    about_description: 'مطور متخصص في تطوير الحلول التقنية المبتكرة باستخدام عدة تقنيات برمجية والذكاء الاصطناعي التوليدي، أقدم تطبيقات عصرية وخدمات تقنية متقدمة.',
    about_vision_title: 'رؤيتي',
    about_vision_description: 'إتاحة التكنولوجيا الحديثة والذكاء الاصطناعي للجميع',
    about_mission_title: 'مهمتي',
    about_mission_description: 'تطوير حلول برمجية مبتكرة تسهل حياة المستخدمين',
    about_values_title: 'قيمي',
    about_values_description: 'الابتكار، الجودة، الاحترافية',
    about_explore_projects: 'استكشف المشاريع',

    // Projects
    projects_badge: 'Portfolio',
    projects_title: 'مشاريع مميزة',
    projects_subtitle: 'استكشف بعض أعمالي الحديثة',
    project_cookit_app_description: 'تطبيق Flutter لوصفات الطعام بالذكاء الاصطناعي',
    project_cookit_web_description: 'نسخة الويب من تطبيق Cookit',
    project_prompt_engineer_description: 'منصة ذكية لتحسين أوامر الذكاء الاصطناعي',
    project_news_description: 'بوابة عربية للأخبار التقنية',
    project_view: 'مشاهدة المشروع',

    // Services
    services_badge: 'Services',
    services_title: 'الخدمات التي أقدمها',
    service_flutter_title: 'تطوير تطبيقات Flutter',
    service_flutter_description: 'بناء تطبيقات Android و iOS عصرية من كود واحد',
    service_flutter_feature_1: 'تطبيقات Cross-Platform',
    service_flutter_feature_2: 'تصميم UI/UX جذاب',
    service_flutter_feature_3: 'أداء عالي وسرعة',
    service_flutter_feature_4: 'سهولة الصيانة',
    service_ai_title: 'حلول الذكاء الاصطناعي',
    service_ai_description: 'دمج نماذج AI المتقدمة في تطبيقاتك',
    service_ai_feature_1: 'تكامل Generative AI',
    service_ai_feature_2: 'Chatbots ذكية',
    service_ai_feature_3: 'معالجة اللغة الطبيعية',
    service_ai_feature_4: 'هندسة الأوامر المتقدمة',
    service_consulting_title: 'استشارات تقنية',
    service_consulting_description: 'إرشادات خبيرة لاختيار التقنيات المناسبة',
    service_consulting_feature_1: 'تحليل المتطلبات',
    service_consulting_feature_2: 'اختيار Tech Stack',
    service_consulting_feature_3: 'مراجعة Architecture',
    service_consulting_feature_4: 'تحسين الأداء',

    // Skills
    skills_badge: 'Skills',
    skills_title: 'المهارات التقنية',
    skills_subtitle: 'التقنيات والأدوات التي أتقنها',
    skills_mobile_development_title: 'تطوير تطبيقات الموبايل',
    skills_flutter_level: 'متقدم',
    skills_dart_level: 'متقدم',
    skills_ai_title: 'الذكاء الاصطناعي',
    skills_generative_ai_level: 'متقدم',
    skills_prompt_engineering_level: 'متقدم',
    skills_web_development_title: 'تطوير الويب',
    skills_html_level: 'متقدم',
    skills_css_level: 'متقدم',
    skills_js_level: 'متقدم',
    skills_astro_level: 'جيد',

    // Contact
    contact_badge: 'Contact',
    contact_title: 'تواصل معي',
    contact_description: 'هل لديك مشروع في ذهنك؟ دعنا نتحدث!',
    contact_email_title: 'البريد الإلكتروني',
    contact_phone_title: 'الهاتف',
    contact_form_name_label: 'الاسم',
    contact_form_name_placeholder: 'أدخل اسمك الكامل',
    contact_form_email_label: 'البريد الإلكتروني',
    contact_form_email_placeholder: 'example@email.com',
    contact_form_service_label: 'نوع الخدمة',
    contact_form_service_option_default: 'اختر نوع الخدمة',
    contact_form_service_option_flutter: 'تطوير تطبيق Flutter',
    contact_form_service_option_ai: 'حلول الذكاء الاصطناعي',
    contact_form_service_option_consulting: 'استشارات تقنية',
    contact_form_service_option_other: 'أخرى',
    contact_form_message_label: 'رسالتك',
    contact_form_message_placeholder: 'اكتب رسالتك هنا...',
    contact_form_submit_button: 'إرسال',

    // Footer
    footer_description: 'مطور التطبيقات متعددة المنصات ومهندس ذكاء اصطناعي',
    footer_quick_links_title: 'روابط سريعة',
    footer_quick_link_home: 'الرئيسية',
    footer_quick_link_about: 'عني',
    footer_quick_link_projects: 'المشاريع',
    footer_quick_link_skills: 'المهارات',
    footer_quick_link_contact: 'تواصل معي',
    footer_projects_title: 'المشاريع',
    footer_social_title: 'تواصل اجتماعي',
    footer_copyright: '© 2025 أحمد علي. جميع الحقوق محفوظة.',
    footer_built_with: 'Built with ❤️ using HTML, CSS & JavaScript'
  },
  
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    
    // Hero Section
    hero_greeting: 'Hi, I\'m',
    hero_name: 'Ahmed Ali Abdellatif Soliman',
    hero_title: 'Cross-platform application developer | AI Engineer',
    hero_description: 'Combining a passion for programming with AI innovations to build modern applications that serve users. Over 10 years of experience in technical and administrative fields.',
    hero_cta_contact: 'Contact Me',
    hero_cta_projects: 'View My Work',

    // Stats
    stats_projects: 'Projects Completed',
    stats_experience: 'Years of Experience',
    stats_technologies: 'Technologies Mastered',
    stats_certifications: 'Certified Certificates',
    
    // About Me
    about_badge: 'About Me',
    about_title: 'About Me',
    about_description: 'A specialized developer in creating innovative technical solutions using various programming technologies and generative AI, I provide modern applications and advanced technical services.',
    about_vision_title: 'My Vision',
    about_vision_description: 'Making modern technology and artificial intelligence accessible to everyone.',
    about_mission_title: 'My Mission',
    about_mission_description: 'Developing innovative software solutions that simplify users\' lives.',
    about_values_title: 'My Values',
    about_values_description: 'Innovation, Quality, Professionalism',
    about_explore_projects: 'Explore Projects',

    // Projects
    projects_badge: 'Portfolio',
    projects_title: 'Featured Projects',
    projects_subtitle: 'Explore some of my recent work',
    project_cookit_app_description: 'A Flutter app for AI-powered food recipes.',
    project_cookit_web_description: 'The web version of the Cookit app.',
    project_prompt_engineer_description: 'An intelligent platform for optimizing AI commands.',
    project_news_description: 'An Arabic portal for technical news.',
    project_view: 'View Project',

    // Services
    services_badge: 'Services',
    services_title: 'The Services I Offer',
    service_flutter_title: 'Flutter App Development',
    service_flutter_description: 'Building modern Android & iOS apps from a single codebase.',
    service_flutter_feature_1: 'Cross-Platform Applications',
    service_flutter_feature_2: 'Attractive UI/UX Design',
    service_flutter_feature_3: 'High Performance and Speed',
    service_flutter_feature_4: 'Easy Maintenance',
    service_ai_title: 'Artificial Intelligence Solutions',
    service_ai_description: 'Integrating advanced AI models into your applications.',
    service_ai_feature_1: 'Generative AI Integration',
    service_ai_feature_2: 'Intelligent Chatbots',
    service_ai_feature_3: 'Natural Language Processing',
    service_ai_feature_4: 'Advanced Prompt Engineering',
    service_consulting_title: 'Technical Consulting',
    service_consulting_description: 'Expert guidance for choosing the right technologies.',
    service_consulting_feature_1: 'Requirements Analysis',
    service_consulting_feature_2: 'Tech Stack Selection',
    service_consulting_feature_3: 'Architecture Review',
    service_consulting_feature_4: 'Performance Optimization',

    // Skills
    skills_badge: 'Skills',
    skills_title: 'Technical Skills',
    skills_subtitle: 'The technologies and tools I master.',
    skills_mobile_development_title: 'Mobile App Development',
    skills_flutter_level: 'Advanced',
    skills_dart_level: 'Advanced',
    skills_ai_title: 'Artificial Intelligence',
    skills_generative_ai_level: 'Advanced',
    skills_prompt_engineering_level: 'Advanced',
    skills_web_development_title: 'Web Development',
    skills_html_level: 'Advanced',
    skills_css_level: 'Advanced',
    skills_js_level: 'Advanced',
    skills_astro_level: 'Good',

    // Contact
    contact_badge: 'Contact',
    contact_title: 'Get In Touch',
    contact_description: 'Have a project in mind? Let\'s talk!',
    contact_email_title: 'Email',
    contact_phone_title: 'Phone',
    contact_form_name_label: 'Name',
    contact_form_name_placeholder: 'Enter your full name',
    contact_form_email_label: 'Email',
    contact_form_email_placeholder: 'example@email.com',
    contact_form_service_label: 'Type of Service',
    contact_form_service_option_default: 'Select a service type',
    contact_form_service_option_flutter: 'Flutter App Development',
    contact_form_service_option_ai: 'AI Solutions',
    contact_form_service_option_consulting: 'Technical Consulting',
    contact_form_service_option_other: 'Other',
    contact_form_message_label: 'Your Message',
    contact_form_message_placeholder: 'Write your message here...',
    contact_form_submit_button: 'Send',

    // Footer
    footer_description: 'Cross-platform application developer and AI engineer.',
    footer_quick_links_title: 'Quick Links',
    footer_quick_link_home: 'Home',
    footer_quick_link_about: 'About Me',
    footer_quick_link_projects: 'Projects',
    footer_quick_link_skills: 'Skills',
    footer_quick_link_contact: 'Contact Me',
    footer_projects_title: 'Projects',
    footer_social_title: 'Social',
    footer_copyright: '© 2025 Ahmed Ali. All rights reserved.',
    footer_built_with: 'Built with ❤️ using HTML, CSS & JavaScript'
  }
};

// Current language (default: Arabic)
let currentLang = localStorage.getItem('lang') || 'ar';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initializeNavigation();
  initializeAnimations();
  initializeScrollEffects();
});

// Set language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  // Update HTML attributes
  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // Check if it's a placeholder, value, or text content
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Update language toggle button
  updateLanguageToggle(lang);
}

// Toggle language
function toggleLanguage() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  setLanguage(newLang);
}

// Update language toggle button
function updateLanguageToggle(lang) {
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'ar' ? 'EN' : 'ع';
    toggleBtn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  }
}

// ========================================
// NAVIGATION
// ========================================

function initializeNavigation() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    });
  }
  
  // Scroll effect for navbar
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Highlight active section in navigation
  highlightActiveSection();
}

function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ========================================
// ANIMATIONS
// ========================================

function initializeAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with animation classes
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

function initializeScrollEffects() {
  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
  }
  
  // Progress bar on scroll
  createScrollProgress();
}

function createScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #7c3aed);
    z-index: 9999;
    transition: width 0.2s ease-out;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}

// ========================================
// FORM HANDLING
// ========================================

async function handleContactForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = currentLang === 'ar' ? '<i class="fas fa-spinner fa-spin"></i> جارٍ الإرسال...' : '<i class="fas fa-spinner fa-spin"></i> Sending...';
  
  try {
    // Send to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    if (data.success) {
      // Show success message
      showNotification(
        currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.' : 'Message sent successfully! I will contact you soon.',
        'success'
      );
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    // Show error message
    showNotification(
      currentLang === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.',
      'error'
    );
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

// ========================================
// NOTIFICATIONS
// ========================================

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  const colors = {
    success: '#10b981',
    error: '#ef4444',
    info: '#2563eb'
  };
  
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${colors[type] || colors.info};
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ========================================
// UTILITIES
// ========================================

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification(
      currentLang === 'ar' ? 'تم النسخ!' : 'Copied!',
      'success'
    );
  });
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// EXPORT FOR USE IN HTML
// ========================================

window.toggleLanguage = toggleLanguage;
window.handleContactForm = handleContactForm;
window.scrollToSection = scrollToSection;
window.copyToClipboard = copyToClipboard;
