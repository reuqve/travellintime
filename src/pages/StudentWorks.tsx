import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Clock, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Video data from user provided links
const videos = [
  {
    id: 1,
    title: 'История Древней Руси',
    description: 'Исследование формирования первых княжеств и зарождения русской государственности',
    duration: '3:45',
    author: 'Ахмедов С.',
    embedUrl: 'https://drive.google.com/file/d/1VqsYlMAE4wpuTOhcpruVZ2r4F_If9Gzx/preview',
    type: 'google-drive',
  },
  {
    id: 2,
    title: 'Петровские реформы',
    description: 'Анализ преобразований Петра I и их влияния на развитие России',
    duration: '5:12',
    author: 'Гетагазов Б.',
    embedUrl: 'https://disk.yandex.ru/i/j8XRwB9LqSL51Q',
    type: 'yandex-disk',
  },
  {
    id: 3,
    title: 'Великая Отечественная война',
    description: 'Подвиг советского народа в годы войны и вклад в общую победу',
    duration: '4:30',
    author: 'Ахмедов С.',
    embedUrl: 'https://disk.yandex.ru/i/Q52d8xUEak2D1A',
    type: 'yandex-disk',
  },
  {
    id: 4,
    title: 'Современная Россия',
    description: 'Путь развития России в XXI веке и перспективы будущего',
    duration: '3:58',
    author: 'Гетагазов Б.',
    embedUrl: 'https://disk.yandex.ru/i/bHiUeIo9RfhHKQ',
    type: 'yandex-disk',
  },
];

export default function StudentWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Videos stagger animation
      videosRef.current.forEach((video, index) => {
        if (video) {
          gsap.fromTo(
            video,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: video,
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

  return (
    <div className="min-h-screen bg-[#e8e4d9]">
      <Navigation />
      
      <section
        ref={sectionRef}
        className="relative py-20 sm:py-28 overflow-hidden"
      >
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
          <div ref={titleRef} className="text-center mb-16">
            <h1 className="font-['Forum'] text-4xl sm:text-5xl lg:text-6xl text-[#242424] mb-6">
              Студенческие работы
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-[#242424]/70 leading-relaxed">
              Исследования и проекты студентов по истории России
            </p>
            <div className="mt-8 flex items-center justify-center gap-6 text-[#242424]/50">
              <div className="flex items-center gap-2">
                <Play size={18} />
                <span>{videos.length} видео</span>
              </div>
              <div className="w-1 h-1 bg-[#242424]/30 rounded-full" />
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Ахмедов С., Гетагазов Б.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={video.id}
                ref={(el) => {
                  videosRef.current[index] = el;
                }}
                className="group bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-video bg-[#242424]">
                  {video.type === 'google-drive' ? (
                    <iframe
                      src={video.embedUrl}
                      className="w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                      title={video.title}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#242424] to-[#3a3a3a]">
                      <a
                        href={video.embedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-4 text-white hover:text-[#d1c7b8] transition-colors"
                      >
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-[#d1c7b8]/20 transition-colors">
                          <Play size={32} className="ml-1" fill="currentColor" />
                        </div>
                        <span className="text-lg font-medium">Открыть в Yandex Disk</span>
                      </a>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#d1c7b8] font-medium">
                      {video.author}
                    </span>
                    <div className="flex items-center gap-1 text-[#242424]/50 text-sm">
                      <Clock size={14} />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-['Forum'] text-xl text-[#242424] mb-3 group-hover:text-[#d1c7b8] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-[#242424]/70 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-lg shadow-lg">
              <Play size={20} className="text-[#d1c7b8]" />
              <p className="text-[#242424]/70">
                Для просмотра видео нажмите на плеер или ссылку на Yandex Disk
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
