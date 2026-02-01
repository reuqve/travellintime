import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollText, Castle, Crown, Star, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Древняя Русь',
    description: 'От первых княжеств до крещения Руси',
    icon: ScrollText,
    delay: 0,
  },
  {
    title: 'Средневековье',
    description: 'Московское царство и становление державы',
    icon: Castle,
    delay: 0.12,
  },
  {
    title: 'Империя',
    description: 'Петровские реформы и золотой век',
    icon: Crown,
    delay: 0.24,
  },
  {
    title: 'Советская эпоха',
    description: 'Революция, война и достижения',
    icon: Star,
    delay: 0.36,
  },
  {
    title: 'Современность',
    description: 'Россия в XXI веке',
    icon: Building2,
    delay: 0.48,
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Cards animation
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
              delay: features[index].delay,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/travellintime/features-battle.jpg"
          alt="Historical battle scene"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8e4d9] via-[#e8e4d9]/95 to-[#e8e4d9]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="font-['Forum'] text-4xl sm:text-5xl lg:text-6xl text-[#242424] mb-6"
          >
            Что вы узнаете
          </h2>
          <div className="w-24 h-1 bg-[#242424] mx-auto" />
        </div>

        {/* Features Grid - Staggered Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group relative bg-white rounded-lg p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 ${
                index === 1 ? 'lg:mt-16' : index === 2 ? 'lg:mt-8' : ''
              }`}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#e8e4d9] rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#d1c7b8] group-hover:scale-110">
                <feature.icon
                  size={28}
                  className="text-[#242424] transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h3 className="font-['Forum'] text-2xl text-[#242424] mb-4 group-hover:text-[#d1c7b8] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#242424]/70 text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#d1c7b8] transition-colors duration-300 pointer-events-none" />

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[#d1c7b8]/0 border-l-[40px] border-l-transparent group-hover:border-t-[#d1c7b8]/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
