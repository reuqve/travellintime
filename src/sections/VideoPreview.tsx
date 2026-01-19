import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VideoPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Video thumbnail animation
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, x: 50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWatchVideo = () => {
    navigate('/student-works');
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#e8e4d9] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div ref={contentRef}>
            <h2 className="font-['Forum'] text-4xl sm:text-5xl text-[#242424] mb-6 leading-tight">
              Исторические
              <br />
              <span className="text-[#d1c7b8]">Хроники</span>
            </h2>
            <p className="text-xl text-[#242424]/70 mb-8 leading-relaxed">
              Углубитесь в прошлое через уникальные документальные материалы и
              реконструкции ключевых событий русской истории
            </p>
            <button
              onClick={handleWatchVideo}
              className="group inline-flex items-center gap-4 px-8 py-4 bg-[#242424] text-white font-['Forum'] text-lg tracking-wider transition-all duration-300 hover:bg-[#d1c7b8] hover:scale-105"
            >
              <span>Смотреть видео</span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-3"
              />
            </button>
          </div>

          {/* Video Thumbnail */}
          <div
            ref={videoRef}
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleWatchVideo}
          >
            <div
              className={`relative rounded-lg overflow-hidden shadow-2xl transition-all duration-500 ${
                isHovered ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]' : ''
              }`}
            >
              <img
                src="video-battle.jpg"
                alt="Historical video preview"
                className={`w-full h-[350px] object-cover transition-transform duration-700 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
                  isHovered ? 'opacity-50' : 'opacity-0'
                }`}
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-20 h-20 bg-white rounded-full flex items-center justify-center transition-all duration-500 animate-pulse-ring ${
                    isHovered ? 'scale-110 bg-[#d1c7b8]' : ''
                  }`}
                >
                  <Play
                    size={32}
                    className={`ml-1 transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-[#242424]'
                    }`}
                    fill={isHovered ? 'white' : '#242424'}
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className={`-bottom-4 -right-4 w-full h-full border-2 border-[#242424]/20 rounded-lg transition-all duration-500 ${
                isHovered ? 'border-[#d1c7b8]' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
