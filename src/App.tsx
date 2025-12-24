import { Routes, Route } from "react-router";
import Home from "./pages/Home";
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
        <Route path="about" element={<div>About</div>} />
        <Route path="contact" element={<div>Contact</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
