import { Link } from 'react-router-dom';
import ThemeSelector from './ThemeSelector';

interface HeaderProps {
  page: string;
}

function Header({ page }: HeaderProps) {
  const buttonStyle =
    'cursor-pointer px-8 py-2 rounded-full hover:text-light-text dark:hover:text-dark-text';
  const selectedSyle =
    'bg-light-surface text-light-text dark:bg-dark-surface dark:text-dark-text';

  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-mono w-35 font-bold text-body-lg">Hugo Juarez</h1>
      <nav className="flex flex-row gap-8 text-light-text-muted dark:text-dark-text-muted">
        <Link
          className={`${buttonStyle} ${page === 'home' ? selectedSyle : ''}`}
          to='/'
        >
          Home
        </Link>
        <Link
          className={`${buttonStyle} ${page === 'about' ? selectedSyle : ''}`}
          to='/about'
        >
          About
        </Link>
        <Link
          className={`${buttonStyle} ${page === 'contact' ? selectedSyle : ''}`}
          to='/contact'
        >
          Contact
        </Link>
      </nav>
      <div className="w-35 flex flex-row items-center justify-end">
        <ThemeSelector />
      </div>
    </div>
  );
}

export default Header;
