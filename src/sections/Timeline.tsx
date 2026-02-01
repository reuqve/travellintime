import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollText, Crown, Star, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const eras = [
  {
    id: 'ancient-rus',
    title: 'Древняя Русь',
    period: 'IX - XIII века',
    description:
      'Зарождение русского государства, крещение Руси, становление княжеской власти',
    icon: ScrollText,
    image: '/travellintime/ancient-rus.jpg',
  },
  {
    id: 'romanov',
    title: 'Московское Царство',
    period: 'XIV - XVII века',
    description:
      'Возвышение Москвы, освобождение от ордынского ига, становление самодержавия',
    icon: Crown,
    image: '/travellintime/romanov-era.jpg',
  },
  {
    id: 'empire',
    title: 'Имперская Россия',
    period: 'XVIII - XIX века',
    description:
      'Петровские реформы, расширение границ, золотой век культуры',
    icon: Star,
    image: '/travellintime/modern-russia.jpg',
  },
  {
    id: 'soviet',
    title: 'Советская Эпоха',
    period: 'XX век',
    description:
      'Революция, индустриализация, победа в Великой Отечественной',
    icon: Building2,
    image: '/travellintime/soviet-era.jpg',
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 80, rotateX: 15 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.8,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.15,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleEraClick = (id: string) => {
    navigate(`/history/${id}`);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#e8e4d9] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #242424 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="font-['Forum'] text-4xl sm:text-5xl lg:text-6xl text-[#242424] mb-6"
          >
            Исторические Эпохи
          </h2>
          <div className="w-24 h-1 bg-[#242424] mx-auto" />
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eras.map((era, index) => (
            <div
              key={era.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onClick={() => handleEraClick(era.id)}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
              style={{ perspective: '1000px' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={era.image}
                  alt={era.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d1c7b8]">
                  <era.icon size={24} className="text-[#242424]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-sm text-[#242424]/60 mb-2 font-medium">
                  {era.period}
                </span>
                <h3 className="font-['Forum'] text-xl text-[#242424] mb-3 group-hover:text-[#d1c7b8] transition-colors duration-300">
                  {era.title}
                </h3>
                <p className="text-[#242424]/70 text-base leading-relaxed">
                  {era.description}
                </p>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d1c7b8] transition-colors duration-300 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
