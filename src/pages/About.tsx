import PhotoGallery from '../components/PhotoGallery';
import Timeline from '../components/Timeline';

function About() {
  return (
    <section>
      <h2 className="text-h2 mt-8 mb-4 font-semibold">About me</h2>
      <p>The short version</p>
      <PhotoGallery />
      <Timeline />
    </section>
  );
}

export default About;
