import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
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
        <Route path="contact" element={<div>Contact</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
