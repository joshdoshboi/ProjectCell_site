import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { LoadingScreen } from './components/loading/LoadingScreen';

export function App() {
  // Check if loader is bypassed via query param (e.g. ?skipLoader=true)
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('skipLoader') === 'true') return false;
    }
    return true;
  });

  const [crtFxEnabled, setCrtFxEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'team', 'projects', 'events', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Full viewport retro CRT Boot Initializer */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Website Viewport */}
      <div 
        className={`min-h-screen bg-[#121513] text-[#A1A1AA] flex flex-col justify-between py-3 relative selection:bg-[#33FF66] selection:text-black transition-opacity duration-700 ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Global CRT scanline texture when CRT FX is active */}
        {crtFxEnabled && (
          <div className="fixed inset-0 crt-scanlines pointer-events-none z-40 opacity-40" />
        )}

        {/* Top Hardware Navigation Bar */}
        <Header
          crtFxEnabled={crtFxEnabled}
          onToggleCrtFx={() => setCrtFxEnabled(!crtFxEnabled)}
          activeSection={activeSection}
        />

        {/* Main Home Page Sections */}
        <Home crtFxEnabled={crtFxEnabled} />

        {/* Bottom Hardware Status Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
