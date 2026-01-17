import { useState, useEffect } from 'react';
import FadeInSection from '../animations/FadeInSection';
import PhotoGallery from '../components/PhotoGallery';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';

function About() {
  const [hoverSection, setHoverSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section>
      <h2 className="text-h2 mt-8 mb-4 font-semibold">About me</h2>
      <p>The short version</p>
      <PhotoGallery />
      <FadeInSection delay={1}>
        <Timeline hoverSection={hoverSection} setHoverSection={setHoverSection}/>
      </FadeInSection>
      <FadeInSection delay={isMobile ? 0 : 1.5}>
        <Projects hoverSection={hoverSection} setHoverSection={setHoverSection}/>
      </FadeInSection>
    </section>
  );
}

export default About;
