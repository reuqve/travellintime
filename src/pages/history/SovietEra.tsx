import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Star, Factory, Rocket, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: '1917',
    title: 'Октябрьская революция',
    description:
      'Большевики во главе с Лениным пришли к власти, началась эра социализма.',
    icon: Star,
  },
  {
    year: '1922',
    title: 'Образование СССР',
    description:
      'Создание Союза Советских Социалистических Республик.',
    icon: Factory,
  },
  {
    year: '1945',
    title: 'Победа в Великой Отечественной',
    description:
      'Разгром нацистской Германии, СССР стал мировой державой.',
    icon: Shield,
  },
  {
    year: '1961',
    title: 'Полёт Гагарина в космос',
    description:
      'Юрий Гагарин стал первым человеком в космосе — триумф советской науки.',
    icon: Rocket,
  },
];

const keyFigures = [
  {
    name: 'Владимир Ленин',
    title: 'Вождь революции',
    description: 'Основатель советского государства, идеолог большевизма.',
  },
  {
    name: 'Иосиф Сталин',
    title: 'Генеральный секретарь',
    description: 'Руководил индустриализацией и победой в войне.',
  },
  {
    name: 'Никита Хрущёв',
    title: 'Первый секретарь',
    description: 'Десталинизация, космические достижения, кукурузная кампания.',
  },
  {
    name: 'Леонид Брежнев',
    title: 'Генеральный секретарь',
    description: 'Эпоха застоя, развитие военной мощи СССР.',
  },
];

export default function SovietEra() {
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
            src="/travellintime/soviet-era.jpg"
            alt="Soviet Era"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#e8e4d9]/60 via-[#e8e4d9]/40 to-[#e8e4d9]" />
        </div>

        <div ref={titleRef} className="relative z-10 text-center pt-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Star size={32} className="text-[#d1c7b8]" />
            <span className="text-lg text-[#242424]/60 tracking-wider">
              XX век
            </span>
          </div>
          <h1 className="font-['Forum'] text-5xl sm:text-6xl lg:text-7xl text-[#242424] mb-6 text-shadow-3d">
            Советская Эпоха
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-[#242424]/70 leading-relaxed">
            От Октябрьской революции до перестройки — великий эксперимент
          </p>
        </div>
      </section>

      <section ref={contentRef} className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-['Forum'] text-3xl sm:text-4xl text-[#242424] mb-6">
                Эпоха перемен
              </h2>
              <div className="space-y-4 text-lg text-[#242424]/80 leading-relaxed">
                <p>
                  Советская эпоха стала одним из самых драматичных периодов в
                  истории России. Октябрьская революция 1917 года изменила
                  ход мировой истории, создав первое социалистическое
                  государство.
                </p>
                <p>
                  Этот период ознаменован колоссальными достижениями в
                  индустриализации, науке и космосе, но также и трагедиями
                  репрессий и войн. СССР сыграл решающую роль в победе над
                  нацизмом и стал одной из двух сверхдержав в холодной войне.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="font-['Forum'] text-2xl text-[#242424] mb-4">
                  Достижения СССР
                </h3>
                <ul className="space-y-3 text-[#242424]/70">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>Первый спутник (1957) и человек в космосе (1961)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>Мощная индустриальная база и энергетика</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>Бесплатное образование и здравоохранение</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#d1c7b8] rounded-full mt-2 flex-shrink-0" />
                    <span>Победа в Великой Отечественной войне</span>
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
              Руководители СССР
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
