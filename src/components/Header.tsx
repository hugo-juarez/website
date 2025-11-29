import ThemeSelector from "./ThemeSelector";

interface HeaderProps {
  page: string;
  onPageSelect: (page: string) => void;
  theme: string;
  onThemeChange: () => void;
}

function Header({ page, onPageSelect, theme, onThemeChange }: HeaderProps) {
  const buttonStyle =
    'cursor-pointer px-8 py-2 rounded-full hover:text-light-text dark:hover:text-dark-text';
  const selectedSyle =
    'bg-light-surface text-light-text dark:bg-dark-surface dark:text-dark-text';

  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-mono w-30 font-bold">Hugo Juarez</h1>
      <div className="flex flex-row gap-8 text-light-text-muted dark:text-dark-text-muted">
        <button
          className={`${buttonStyle} ${page === 'home' ? selectedSyle : ''}`}
          onClick={() => onPageSelect('home')}
        >
          Home
        </button>
        <button
          className={`${buttonStyle} ${page === 'about' ? selectedSyle : ''}`}
          onClick={() => onPageSelect('about')}
        >
          About
        </button>
        <button
          className={`${buttonStyle} ${page === 'contact' ? selectedSyle : ''}`}
          onClick={() => onPageSelect('contact')}
        >
          Contact
        </button>
      </div>
      <div className="w-30 flex flex-row items-center justify-end">
        <ThemeSelector theme={theme} onThemeChange={onThemeChange}/>
      </div>
    </div>
  );
}

export default Header;
