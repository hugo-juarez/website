import YoutubePlayer from '../components/YoutubePlayer';
import SpotifyPlayer from '../components/SpotifyPlayer';
import FadeInSection from '../animations/FadeInSection';

function Home() {
  return (
    <>
      <FadeInSection delay={0.5}>
      <section className="my-16 flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4 text-body w-2/5">
          <h1 className="text-h1 mb-8 font-semibold">Hi, I'm Hugo</h1>
          <p>
            Embedded Software Engineer looking to improve it’s portfolio while
            building whatever comes to my mind.
          </p>
          <p>
            Into low-level coding and making programms that have an effect on a
            real life system.
          </p>
          <p>
            I post videos mostly to keep myself on track, but if you like
            watching someone casually struggle through projects, feel free to
            follow.
          </p>
        </div>
        <div className='w-2/5'>
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
