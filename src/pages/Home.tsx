import YoutubePlayer from '../components/YoutubePlayer';
import SpotifyPlayer from '../components/SpotifyPlayer';
import FadeInSection from '../animations/FadeInSection';

function Home() {
  return (
    <>
      <FadeInSection delay={0.5}>
      <section className="my-8 md:my-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        <div className="flex flex-col gap-4 text-body-sm md:text-body w-full md:w-2/5">
          <h1 className="text-h2 mb-4 md:mb-8 md:text-h1 font-semibold">Hi, I'm Hugo</h1>
          <p>
            Embedded Software Engineer looking to improve it's portfolio while
            building whatever comes to my mind.
          </p>
          <p className="hidden md:block">
            Into low-level coding and making programms that have an effect on a
            real life system.
          </p>
          <p className="hidden md:block">
            I post videos mostly to keep myself on track, but if you like
            watching someone casually struggle through projects, feel free to
            follow.
          </p>
        </div>
        <div className='w-full md:w-2/5'>
          <YoutubePlayer />
        </div>
      </section>
      </FadeInSection>
      <FadeInSection delay={1}>
      <section className='w-full'>
        <SpotifyPlayer />
      </section>
      </FadeInSection>
    </>
  );
}

export default Home;
