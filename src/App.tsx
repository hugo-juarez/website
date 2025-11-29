import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home/Home';
import get_default_theme from './utilities/get_default_theme';

function App() {
  const [theme, setTheme] = useState<string>(get_default_theme());
  const [page, setPage] = useState<string>('home');

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
    <div className="h-screen px-8 py-4 font-inter bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
      <Header
        page={page}
        onPageSelect={setPage}
        onThemeChange={() =>
          setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
        }
      />
      {page === 'home' && <Home />}
    </div>
  );
}

export default App;
