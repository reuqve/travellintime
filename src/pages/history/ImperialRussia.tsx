import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Building2, Ship, BookOpen, Palette } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: '1721',
    title: 'Провозглашение империи',
    description:
      'Пётр I принял титул императора, Россия официально стала империей.',
    icon: Building2,
  },
  {
    year: '1703',
    title: 'Основание Санкт-Петербурга',
    description:
      'Пётр I заложил крепость и город, ставший новой столицей империи.',
    icon: Ship,
  },
  {
    year: '1812',
    title: 'Отечественная война',
    description:
      'Победа России над армией Наполеона, ставшая поворотным моментом в европейской истории.',
    icon: BookOpen,
  },
  {
    year: '1861',
    title: 'Отмена крепостного права',
    description:
      'Александр II освободил крестьян от крепостной зависимости.',
    icon: Palette,
  },
];

const keyFigures = [
  {
    name: 'Пётр I Великий',
    title: 'Император-реформатор',
    description: 'Преобразовал Россию, основал новую столицу, реформировал армию и флот.',
  },
  {
    name: 'Екатерина II',
    title: 'Великая',
    description: 'Эпоха Просвещения, расширение империи, культурное развитие.',
  },
  {
    name: 'Александр I',
    title: 'Благословенный',
    description: 'Победа над Наполеоном, реформы, создание Священного союза.',
  },
  {
    name: 'Александр II',
    title: 'Освободитель',
    description: 'Отменил крепостное право, провёл великие реформы.',
  },
];

export default function ImperialRussia() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.3,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#e8e4d9]">
      <Navigation />
      
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-russia.jpg"
            alt="Imperial Russia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#e8e4d9]/60 via-[#e8e4d9]/40 to-[#e8e4d9]" />
        </div>

        <div ref={titleRef} className="relative z-10 text-center pt-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Building2 size={32} className="text-[#d1c7b8]" />
            <span className="text-lg text-[#242424]/60 tracking-wider">
              XVIII - XIX века
            </span>
          </div>
          <h1 className="font-['Forum'] text-5xl sm:text-6xl lg:text-7xl text-[#242424] mb-6 text-shadow-3d">
            Имперская Россия
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-[#242424]/70 leading-relaxed">
            Эпоха великих преобразований, расширения границ и культурного расцвета
          </p>
        </div>
      </section>

      <section ref={contentRef} className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-['Forum'] text-3xl sm:text-4xl text-[#242424] mb-6">
                Российская империя
              </h2>
              <div className="space-y-4 text-lg text-[#242424]/80 leading-relaxed">
                <p>
                  Российская империя была одним из крупнейших государств в
                  истории человечества. Простираясь от Польши до Тихого океана,
                  она играла важную роль в мировой политике и культуре.
                </p>
                <p>
                  Эпоха империи ознаменована знаменитыми реформами Петра I,
                  просвещённым правлением Екатерины II, победой над
                  Наполеоном и великими реформами XIX века.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="font-['Forum'] text-2xl text-[#242424] mb-4">
                  Достижения эпохи
                </h3>
                <ul className="space-y-3 text-[#242424]/70">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>Основание Санкт-Петербурга в 1703 году</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>Победа в Отечественной войне 1812 года</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>Золотой век русской литературы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>Отмена крепостного права в 1861 году</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="font-['Forum'] text-3xl sm:text-4xl text-[#242424] mb-12 text-center">
              Хронология событий
            </h2>
            <div className="relative">
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#242424]/20 sm:-translate-x-px" />

              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0
                        ? 'sm:flex-row'
                        : 'sm:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#d1c7b8] rounded-full flex items-center justify-center z-10">
                      <event.icon size={16} className="text-white" />
                    </div>

                    <div
                      className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] ${
                        index % 2 === 0 ? 'sm:text-left' : 'sm:text-right'
                      }`}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <span className="font-['Forum'] text-2xl text-[#d1c7b8]">
                          {event.year}
                        </span>
                        <h3 className="font-['Forum'] text-xl text-[#242424] mt-2 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-[#242424]/70 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Figures */}
          <div>
            <h2 className="font-['Forum'] text-3xl sm:text-4xl text-[#242424] mb-12 text-center">
              Великие императоры
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFigures.map((figure) => (
                <div
                  key={figure.name}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="font-['Forum'] text-xl text-[#242424] mb-2">
                    {figure.name}
                  </h3>
                  <span className="text-sm text-[#d1c7b8] font-medium">
                    {figure.title}
                  </span>
                  <p className="text-[#242424]/70 mt-3 text-base leading-relaxed">
                    {figure.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
