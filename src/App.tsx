import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FadeInSection from "./animations/FadeInSection";

function App() {
  return (
    <>
      <FadeInSection>
        <Header />
      </FadeInSection>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
