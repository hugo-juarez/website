import { Routes, Route } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<div>About</div>} />
      <Route path="contact" element={<div>Contact</div>} />
    </Routes>
  );
}

export default App;
