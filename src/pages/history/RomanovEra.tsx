import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Crown, Swords, ScrollText, Church } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: '1547',
    title: 'Венчание Ивана IV на царство',
    description:
      'Иван IV (Грозный) стал первым царём всея Руси, официально провозгласив самодержавие.',
    icon: Crown,
  },
  {
    year: '1552-1556',
    title: 'Завоевание Казани и Астрахани',
    description:
      'Присоединение казанского и астраханского ханств к Русскому государству.',
    icon: Swords,
  },
  {
    year: '1598',
    title: 'Конец династии Рюриковичей',
    description:
      'Смерть царя Фёдора Иоанновича, последнего царя из династии Рюриковичей.',
    icon: ScrollText,
  },
  {
    year: '1613',
    title: 'Избрание Михаила Романова',
    description:
      'Начало новой династии — Романовых, положившей конец Смутному времени.',
    icon: Church,
  },
];

const keyFigures = [
  {
    name: 'Иван IV Грозный',
    title: 'Первый царь всея Руси',
    description: 'Провозгласил самодержавие, реформировал государство.',
  },
  {
    name: 'Пётр I',
    title: 'Император',
    description: 'Преобразовал Россию, основал Санкт-Петербург.',
  },
  {
    name: 'Екатерина II',
    title: 'Великая императрица',
    description: 'Просвещённая монарх, расширила границы империи.',
  },
  {
    name: 'Александр II',
    title: 'Освободитель',
    description: 'Отменил крепостное право, провёл реформы.',
  },
];

export default function RomanovEra() {
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
            src="/romanov-era.jpg"
            alt="Romanov Era"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#e8e4d9]/60 via-[#e8e4d9]/40 to-[#e8e4d9]" />
        </div>

        <div ref={titleRef} className="relative z-10 text-center pt-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Crown size={32} className="text-[#d1c7b8]" />
            <span className="text-lg text-[#242424]/60 tracking-wider">
              XIV - XVII века
            </span>
          </div>
          <h1 className="font-['Forum'] text-5xl sm:text-6xl lg:text-7xl text-[#242424] mb-6 text-shadow-3d">
            Московское Царство
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-[#242424]/70 leading-relaxed">
            От освобождения от ордынского ига до преобразований Петра Великого
          </p>
        </div>
      </section>

      <section ref={contentRef} className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-['Forum'] text-3xl sm:text-4xl text-[#242424] mb-6">
                Возвышение Москвы
              </h2>
              <div className="space-y-4 text-lg text-[#242424]/80 leading-relaxed">
                <p>
                  Московское царство стало правопреемником Великого
                  княжества Московского. Эпоха характеризуется освобождением
                  от монгольского ига, централизацией власти и становлением
                  самодержавия.
                </p>
                <p>
                  При Иване IV Грозном Россия впервые была официально
                  провозглашена царством. Период Смутного времени (1598-1613)
                  прервал династию Рюриковичей, но закончился избранием
                  новой династии — Романовых.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="font-['Forum'] text-2xl text-[#242424] mb-4">
                  Ключевые события
                </h3>
                <ul className="space-y-3 text-[#242424]/70">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>1480 год — Великое стояние на Угре</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>1547 год — венчание Ивана IV на царство</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>1552 год — взятие Казани</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>1613 год — избрание Михаила Романова</span>
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
              Выдающиеся правители
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
