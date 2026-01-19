import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.4,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleExplore = () => {
    navigate('/history/ancient-rus');
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 sm:py-40 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="cta-battle.jpg"
          alt="Historical battle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-['Forum'] text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Готовы погрузиться
          <br />
          <span className="text-[#d1c7b8]">в историю?</span>
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Начните своё путешествие по векам российской истории прямо сейчас
        </p>
        <button
          ref={buttonRef}
          onClick={handleExplore}
          className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-[#242424] font-['Forum'] text-lg tracking-wider transition-all duration-300 hover:bg-[#d1c7b8] hover:text-white hover:scale-105 animate-pulse-ring"
        >
          <span>Исследовать</span>
          <ArrowRight
            size={20}
            className="arrow-icon transition-transform duration-300 group-hover:translate-x-3"
          />
        </button>
      </div>
    </section>
  );
}
