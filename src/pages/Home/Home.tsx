import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header page='home' theme={'dark'} onThemeChange={()=>{}} />
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;
