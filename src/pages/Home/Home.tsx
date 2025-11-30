import Header from '../../components/Header';

function Home() {
  return (
    <>
      <Header page="home" />
      <section className="my-16 flex flex-col gap-4 text-body w-2/5">
        <h1 className="font-mono text-h1 mb-8">Hi, I'm Hugo</h1>
        <p>Embedded Software Engineer looking to improve it’s portfolio while building whatever comes to my mind.</p>
        <p>Into low-level coding and making programms that have an effect on a real life system. </p>
        <p>I post videos mostly to keep myself on track, but if you like watching someone casually struggle through projects, feel free to follow.</p>
      </section>
    </>
  );
}

export default Home;
