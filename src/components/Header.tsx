interface HeaderProps {
  page: string;
  onPageSelect: (page: string) => void;
  onThemeChange: () => void;
}

function Header({ page, onPageSelect, onThemeChange }: HeaderProps) {
  const buttonStyle =
    'cursor-pointer px-8 py-2 rounded-full hover:text-light-text dark:hover:text-dark-text';
  const selectedSyle = 'bg-light-surface text-light-text dark:bg-dark-surface dark:text-dark-text';

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
        <button
          className="w-5 h-5 text-light-text-muted hover:text-light-text dark:text-dark-text-muted cursor-pointer dark:hover:text-dark-text"
          onClick={onThemeChange}
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
