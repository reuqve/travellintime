import { BookOpen, FileText, HelpCircle, Mail } from 'lucide-react';

const footerLinks = {
  navigation: [
    { label: 'Главная', href: '/' },
    { label: 'История', href: '/history/ancient-rus' },
    { label: 'Видеоматериалы', href: '#' },
    { label: 'Студенческие работы', href: '/student-works' },
  ],
  resources: [
    { label: 'Библиотека материалов', href: '#', icon: BookOpen },
    { label: 'Полезные ссылки', href: '#', icon: FileText },
    { label: 'FAQ', href: '#', icon: HelpCircle },
    { label: 'Контакты', href: '#', icon: Mail },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#242424] text-white overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Navigation Column */}
          <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h4 className="font-['Forum'] text-xl mb-6 text-[#d1c7b8]">Навигация</h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 underline-draw text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="animate-fade-up" style={{ animationDelay: '420ms' }}>
            <h4 className="font-['Forum'] text-xl mb-6 text-[#d1c7b8]">Ресурсы</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-3 text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 group text-lg"
                  >
                    <link.icon size={18} className="text-[#d1c7b8] group-hover:scale-110 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div className="animate-fade-up" style={{ animationDelay: '540ms' }}>
            <h4 className="font-['Forum'] text-xl mb-6 text-[#d1c7b8]">О проекте</h4>
            <p className="text-white/70 text-lg leading-relaxed">
              Образовательный проект по истории России для студентов и всех
              интересующихся богатым прошлым нашей страны.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-12 mb-8">
          <div
            className="h-px bg-gradient-to-r from-transparent via-[#d1c7b8]/50 to-transparent animate-fade-up"
            style={{ animationDelay: '600ms' }}
          />
        </div>

        {/* Student Credits - Required on all pages */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '700ms' }}>
          <p className="text-[#d1c7b8] text-base leading-relaxed max-w-3xl mx-auto">
            Сделано студентами 2 курса ТТИТ из 442 группы Ахмедовым Санджаром и
            Гетагазовым Бесланом для преподавателя истории Бондаревой Ольги
            Александровны в 2026 году
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center animate-fade-up" style={{ animationDelay: '800ms' }}>
          <p className="text-white/40 text-sm">
            © 2026 История России. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
