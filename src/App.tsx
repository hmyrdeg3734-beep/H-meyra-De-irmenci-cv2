import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail, ChevronDown, GraduationCap, Briefcase, HeartHandshake, PenTool, Sun, Moon, Globe } from 'lucide-react';
import ChatBot from './components/ChatBot';

const translations = {
  tr: {
    nav: { about: "Hakkımda", resume: "Özgeçmiş", projects: "Yayınlar & Projeler", contact: "İletişim" },
    hero: {
      subtitle: "Yeni Medya ve İletişim",
      description: "Üsküdar Üniversitesi öğrencisi, dijital tasarımcı ve Kızılay gönüllüsü. Medya dünyasında yaratıcı çözümler üretiyor ve toplumsal projelere liderlik ediyorum.",
      contactBtn: "İletişime Geç",
      resumeBtn: "Özgeçmişimi İncele"
    },
    about: {
      title: "Hakkımda",
      p1: "Lise eğitimimi Asiye Ağaoğlu Anadolu Lisesi'nde tamamladıktan sonra, dijital dünyaya ve iletişime olan tutkum beni Üsküdar Üniversitesi İletişim Fakültesi Yeni Medya ve İletişim bölümüne yönlendirdi. Şu anda lisans eğitimime aktif olarak devam etmekteyim.",
      p2: "Eğitim hayatımın yanı sıra sivil toplum kuruluşlarında da aktif rol alıyorum. Kızılay'da başkanlık görevini yürütmekte, bugüne kadar birçok eğitim, etkinlik ve sosyal sorumluluk projesinin hayata geçirilmesine liderlik etmekteyim.",
      p3: "Medya sektöründe dijital tasarım ve sosyal medya hesap yönetimi alanlarında profesyonel olarak çalışıyor, aynı zamanda kendi dijital varlıklarımı stratejik bir şekilde yönetiyorum. Amacım, yeni medyanın gücünü toplumsal fayda ve yaratıcı iletişim çözümleri için kullanmaktır."
    },
    resume: {
      title: "Özgeçmiş",
      education: "Eğitim",
      experience: "Deneyim",
      uni: "Üsküdar Üniversitesi",
      uniStatus: "Devam Ediyor",
      uniDesc: "İletişim Fakültesi - Yeni Medya ve İletişim Bölümü (Lisans)",
      hs: "Asiye Ağaoğlu Anadolu Lisesi",
      hsStatus: "Mezun",
      hsDesc: "Lise Eğitimi",
      kizilay: "Kızılay",
      kizilayRole: "Başkan",
      kizilayDesc: "Eğitimler, etkinlikler ve sosyal sorumluluk projelerinin yürütülmesi ve organizasyonu.",
      media: "Medya & İletişim",
      mediaRole: "Serbest Çalışan",
      mediaDesc: "Dijital tasarım, içerik üretimi, sosyal medya hesap yönetimi ve kişisel marka yönetimi."
    },
    projects: {
      title: "Yayınlar & Projeler",
      subtitle: "Akademik çalışmalarım, Kızılay bünyesinde yürüttüğüm projeler ve dijital medya alanındaki profesyonel işlerim.",
      p1Title: "Kızılay Sosyal Sorumluluk Projeleri",
      p1Desc: "Kızılay başkanlığı sürecinde organize edilen, toplum yararına yönelik çeşitli eğitim ve etkinlik faaliyetlerinin planlanması ve yürütülmesi.",
      p2Title: "Dijital Tasarım & Sosyal Medya",
      p2Desc: "Yeni medya trendlerine uygun dijital içerik tasarımları, marka kimliği oluşturma ve stratejik sosyal medya hesap yönetimi çalışmaları."
    },
    contact: {
      title: "İletişime Geçin",
      subtitle: "Projeleriniz, işbirlikleri veya sadece merhaba demek için benimle sosyal medya hesaplarım üzerinden iletişime geçebilirsiniz.",
      linkedin: "LinkedIn Profilim",
      instagram: "Instagram Profilim",
      email: "E-posta Gönder"
    },
    footer: "Tüm hakları saklıdır."
  },
  en: {
    nav: { about: "About", resume: "Resume", projects: "Projects", contact: "Contact" },
    hero: {
      subtitle: "New Media and Communication",
      description: "Student at Üsküdar University, digital designer, and Red Crescent volunteer. Creating creative solutions in the media world and leading social projects.",
      contactBtn: "Get in Touch",
      resumeBtn: "View Resume"
    },
    about: {
      title: "About Me",
      p1: "After completing my high school education at Asiye Ağaoğlu Anatolian High School, my passion for the digital world and communication led me to the New Media and Communication department at Üsküdar University's Faculty of Communication. I am currently continuing my undergraduate studies.",
      p2: "In addition to my education, I take an active role in non-governmental organizations. I serve as the President at the Red Crescent (Kızılay), leading the implementation of many training programs, events, and social responsibility projects.",
      p3: "In the media sector, I work professionally in digital design and social media account management, while also strategically managing my own digital assets. My goal is to use the power of new media for social benefit and creative communication solutions."
    },
    resume: {
      title: "Resume",
      education: "Education",
      experience: "Experience",
      uni: "Üsküdar University",
      uniStatus: "Ongoing",
      uniDesc: "Faculty of Communication - New Media and Communication (Bachelor's)",
      hs: "Asiye Ağaoğlu Anatolian High School",
      hsStatus: "Graduated",
      hsDesc: "High School Education",
      kizilay: "Red Crescent (Kızılay)",
      kizilayRole: "President",
      kizilayDesc: "Execution and organization of training programs, events, and social responsibility projects.",
      media: "Media & Communication",
      mediaRole: "Freelancer",
      mediaDesc: "Digital design, content creation, social media account management, and personal brand management."
    },
    projects: {
      title: "Publications & Projects",
      subtitle: "My academic studies, projects I run within the Red Crescent, and my professional work in digital media.",
      p1Title: "Red Crescent Social Responsibility Projects",
      p1Desc: "Planning and execution of various educational and event activities for the benefit of society, organized during my Red Crescent presidency.",
      p2Title: "Digital Design & Social Media",
      p2Desc: "Digital content designs in line with new media trends, brand identity creation, and strategic social media account management."
    },
    contact: {
      title: "Get in Touch",
      subtitle: "You can contact me via my social media accounts for your projects, collaborations, or just to say hi.",
      linkedin: "My LinkedIn Profile",
      instagram: "My Instagram Profile",
      email: "Send an Email"
    },
    footer: "All rights reserved."
  }
};

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  const t = translations[lang];

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/h%C3%BCmeyra-de%C4%9Firmenci-33b599375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/hmyr.deg22?igsh=MTc0Yjh3amkxcHM5cw=="
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="relative flex items-center justify-center w-11 h-11 group" title="Hümeyra Değirmenci">
            <div className="absolute inset-0 bg-rose-600 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-700 opacity-20 dark:opacity-30"></div>
            <div className="absolute inset-0 bg-rose-500 rounded-xl -rotate-12 group-hover:rotate-0 transition-transform duration-500 opacity-30 dark:opacity-40"></div>
            <div className="relative flex items-center justify-center w-full h-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm rounded-xl border border-stone-200/50 dark:border-stone-700/50 shadow-sm transition-colors">
              <span className="font-serif font-bold text-lg text-stone-800 dark:text-stone-100 tracking-tighter">
                H<span className="text-rose-600 dark:text-rose-500">D</span>
              </span>
            </div>
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600 dark:text-stone-300">
            <a href="#hakkimda" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">{t.nav.about}</a>
            <a href="#ozgecmis" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">{t.nav.resume}</a>
            <a href="#yayinlar" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">{t.nav.projects}</a>
            <a href="#iletisim" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">{t.nav.contact}</a>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')} 
              className="flex items-center gap-1 text-stone-500 dark:text-stone-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              title="Change Language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{lang === 'tr' ? 'EN' : 'TR'}</span>
            </button>
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="text-stone-500 dark:text-stone-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
              title="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="w-px h-5 bg-stone-300 dark:bg-stone-700 mx-1"></div>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-stone-500 dark:text-stone-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-stone-500 dark:text-stone-400 hover:text-[#E1306C] dark:hover:text-[#E1306C] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-40 h-40 md:w-48 md:h-48 mb-8 rounded-full overflow-hidden border-4 border-white dark:border-stone-800 shadow-xl relative group"
          >
            <img 
              src="/profile.jpg" 
              alt="Hümeyra Değirmenci" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Hümeyra+Değirmenci&background=f43f5e&color=fff&size=400";
              }}
            />
          </motion.div>
          <h2 className="text-rose-600 dark:text-rose-400 font-medium tracking-widest uppercase text-sm mb-4">{t.hero.subtitle}</h2>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 dark:text-stone-50 mb-6 leading-tight transition-colors duration-300">
            Hümeyra Değirmenci
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#iletisim" className="px-8 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors w-full sm:w-auto">
              {t.hero.contactBtn}
            </a>
            <a href="#ozgecmis" className="px-8 py-3 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700 rounded-full font-medium hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors w-full sm:w-auto">
              {t.hero.resumeBtn}
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce text-stone-400 dark:text-stone-500"
        >
          <a href="#hakkimda"><ChevronDown className="w-6 h-6" /></a>
        </motion.div>
      </section>

      {/* Hakkımda Section */}
      <section id="hakkimda" className="py-24 px-6 bg-white dark:bg-stone-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-6">{t.about.title}</h2>
              <div className="w-12 h-1 bg-rose-600 dark:bg-rose-500 mb-6"></div>
            </div>
            <div className="md:w-2/3 prose prose-stone dark:prose-invert prose-lg text-stone-600 dark:text-stone-300">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Özgeçmiş Section */}
      <section id="ozgecmis" className="py-24 px-6 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-16 text-center">{t.resume.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Eğitim */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50">{t.resume.education}</h3>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 dark:before:via-stone-700 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-stone-950 bg-stone-200 dark:bg-stone-800 text-stone-500 dark:text-stone-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-rose-600 dark:bg-rose-500 rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm transition-colors duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-stone-900 dark:text-stone-100">{t.resume.uni}</h4>
                    </div>
                    <div className="text-sm text-rose-600 dark:text-rose-400 font-medium mb-2">{t.resume.uniStatus}</div>
                    <p className="text-stone-600 dark:text-stone-400 text-sm">{t.resume.uniDesc}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-stone-950 bg-stone-200 dark:bg-stone-800 text-stone-500 dark:text-stone-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-stone-400 dark:bg-stone-500 rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm transition-colors duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-stone-900 dark:text-stone-100">{t.resume.hs}</h4>
                    </div>
                    <div className="text-sm text-stone-500 dark:text-stone-400 font-medium mb-2">{t.resume.hsStatus}</div>
                    <p className="text-stone-600 dark:text-stone-400 text-sm">{t.resume.hsDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deneyim */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50">{t.resume.experience}</h3>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 dark:before:via-stone-700 before:to-transparent">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-stone-950 bg-stone-200 dark:bg-stone-800 text-stone-500 dark:text-stone-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <HeartHandshake className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm transition-colors duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-stone-900 dark:text-stone-100">{t.resume.kizilay}</h4>
                    </div>
                    <div className="text-sm text-rose-600 dark:text-rose-400 font-medium mb-2">{t.resume.kizilayRole}</div>
                    <p className="text-stone-600 dark:text-stone-400 text-sm">{t.resume.kizilayDesc}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-stone-950 bg-stone-200 dark:bg-stone-800 text-stone-500 dark:text-stone-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <PenTool className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm transition-colors duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-stone-900 dark:text-stone-100">{t.resume.media}</h4>
                    </div>
                    <div className="text-sm text-stone-500 dark:text-stone-400 font-medium mb-2">{t.resume.mediaRole}</div>
                    <p className="text-stone-600 dark:text-stone-400 text-sm">{t.resume.mediaDesc}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yayınlar & Projeler Section */}
      <section id="yayinlar" className="py-24 px-6 bg-white dark:bg-stone-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-4">{t.projects.title}</h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">{t.projects.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Proje Kartı 1 */}
            <div className="group rounded-2xl border border-stone-200 dark:border-stone-800 p-6 hover:shadow-lg transition-all hover:border-rose-200 dark:hover:border-rose-800 bg-stone-50/50 dark:bg-stone-950/50">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">{t.projects.p1Title}</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                {t.projects.p1Desc}
              </p>
            </div>

            {/* Proje Kartı 2 */}
            <div className="group rounded-2xl border border-stone-200 dark:border-stone-800 p-6 hover:shadow-lg transition-all hover:border-rose-200 dark:hover:border-rose-800 bg-stone-50/50 dark:bg-stone-950/50">
              <div className="w-12 h-12 bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">{t.projects.p2Title}</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                {t.projects.p2Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Section */}
      <section id="iletisim" className="py-24 px-6 bg-stone-900 dark:bg-stone-950 text-stone-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">{t.contact.title}</h2>
          <p className="text-stone-400 mb-12 max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-stone-800 dark:bg-stone-900 hover:bg-stone-700 dark:hover:bg-stone-800 rounded-xl transition-colors"
            >
              <Linkedin className="w-6 h-6 text-[#0A66C2]" />
              <span className="font-medium">{t.contact.linkedin}</span>
            </a>
            
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-stone-800 dark:bg-stone-900 hover:bg-stone-700 dark:hover:bg-stone-800 rounded-xl transition-colors"
            >
              <Instagram className="w-6 h-6 text-[#E1306C]" />
              <span className="font-medium">{t.contact.instagram}</span>
            </a>
            
            <a 
              href="mailto:iletisim@example.com" 
              className="flex items-center gap-3 px-6 py-4 bg-stone-800 dark:bg-stone-900 hover:bg-stone-700 dark:hover:bg-stone-800 rounded-xl transition-colors"
            >
              <Mail className="w-6 h-6 text-rose-500" />
              <span className="font-medium">{t.contact.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-stone-500 dark:text-stone-600 text-sm bg-stone-950 dark:bg-black transition-colors duration-300">
        <p>© {new Date().getFullYear()} Hümeyra Değirmenci. {t.footer}</p>
      </footer>

      {/* AI Assistant ChatBot */}
      <ChatBot lang={lang} />
    </div>
  );
}
