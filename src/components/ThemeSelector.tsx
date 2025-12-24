import HoverButton from '../animations/HoverButton';
import { useTheme } from '../contexts/ThemeContext';


function ThemeSelector() {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <HoverButton>
    <button
      className="w-5 h-5 text-light-text-muted hover:text-light-text dark:text-dark-text-muted cursor-pointer dark:hover:text-dark-text"
      onClick={toggleTheme}
    >
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {theme === 'dark' && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        )}
        {theme === 'light' && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        )}
      </svg>
    </button>
    </HoverButton>
  );
}

export default ThemeSelector;
