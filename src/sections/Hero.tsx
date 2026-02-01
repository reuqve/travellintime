import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 50,
      });
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 1.2,
      });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'expo.out',
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'expo.out',
          },
          '-=1'
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleStartJourney = () => {
    navigate('/history/ancient-rus');
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/hero-fortress.jpg"
          alt="Ancient Russian fortress"
          className="w-full h-full object-cover animate-ken-burns"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8e4d9]/60 via-[#e8e4d9]/40 to-[#e8e4d9]/90" />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Vignette */}
        <div className="vignette" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1
          ref={titleRef}
          className="font-['Forum'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-8"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.3)' }}
        >
          <span className="block">ПУТЕШЕСТВИЕ</span>
          <span className="block text-[#f5f0e6]">ВО ВРЕМЕНИ</span>
        </h1>

        <p
          ref={subtitleRef}
          className="max-w-2xl mx-auto text-xl sm:text-2xl text-white mb-12 leading-relaxed"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
        >
          Исследуйте богатую и сложную историю России от древних времен до
          наших дней
        </p>

        <button
          ref={buttonRef}
          onClick={handleStartJourney}
          className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-[#242424] font-['Forum'] text-lg tracking-wider transition-all duration-300 hover:bg-[#d1c7b8] hover:text-white hover:scale-105 animate-pulse-ring"
        >
          <span>Начать путешествие</span>
          <ArrowRight
            size={20}
            className="arrow-icon transition-transform duration-300 group-hover:translate-x-3"
          />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#e8e4d9] to-transparent z-10" />
    </section>
  );
}
