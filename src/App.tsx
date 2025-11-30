import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import get_default_theme from './utilities/get_default_theme';

function App() {
  const [theme, setTheme] = useState<string>(get_default_theme());

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<div>About</div>} />
      <Route path='/contact' element={<div>Contact</div>} />
    </Routes>
    
  );
}

export default App;
