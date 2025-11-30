import { NavLink } from 'react-router';
import ThemeSelector from './ThemeSelector';

function Header() {
  const buttonStyle =
    'cursor-pointer px-8 py-2 rounded-full hover:text-light-text dark:hover:text-dark-text';
  const selectedSyle = buttonStyle + " " +
    'bg-light-surface text-light-text dark:bg-dark-surface dark:text-dark-text';

  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-mono w-35 font-bold text-body-lg">Hugo Juarez</h1>
      <nav className="flex flex-row gap-8 text-light-text-muted dark:text-dark-text-muted">
        <NavLink
          className={({isActive})=> isActive ? selectedSyle : buttonStyle}
          to='/' end
        >
          Home
        </NavLink>
        <NavLink
          className={({isActive})=> isActive ? selectedSyle : buttonStyle}
          to='/about' end
        >
          About
        </NavLink>
        <NavLink
          className={({isActive})=> isActive ? selectedSyle : buttonStyle}
          to='/contact' end
        >
          Contact
        </NavLink>
      </nav>
      <div className="w-35 flex flex-row items-center justify-end">
        <ThemeSelector />
      </div>
    </div>
  );
}

export default Header;
