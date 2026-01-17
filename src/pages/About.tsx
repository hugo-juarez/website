import FadeInSection from '../animations/FadeInSection';
import PhotoGallery from '../components/PhotoGallery';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';

function About() {
  return (
    <section>
      <h2 className="text-h2 mt-8 mb-4 font-semibold">About me</h2>
      <p>The short version</p>
      <PhotoGallery />
      <FadeInSection delay={1}>
        <Timeline />
      </FadeInSection>
      <FadeInSection delay={1.5}>
        <Projects />
      </FadeInSection>
    </section>
  );
}

export default About;
