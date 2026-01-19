import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Timeline from '../sections/Timeline';
import VideoPreview from '../sections/VideoPreview';
import Features from '../sections/Features';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e8e4d9]">
      <Navigation />
      <main>
        <Hero />
        <Timeline />
        <VideoPreview />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
