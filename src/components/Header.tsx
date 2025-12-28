import { NavLink } from "react-router";
import ThemeSelector from "./ThemeSelector";
import { motion } from "motion/react";

function Header() {
  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-row justify-between items-center py-2">
      <NavLink to="/" end>
        <img src="/logo.png" className="w-10" />
      </NavLink>
      <nav className="flex flex-row gap-8 text-light-text-muted dark:text-dark-text-muted">
        {pages.map((page) => (
          <NavLink
            to={page.path}
            className={({isActive}) => `cursor-pointer px-8 py-2 rounded-full hover:text-light-text dark:hover:text-dark-text relative z-0 ${isActive ? "text-light-text dark:text-dark-text" : ""}`}
            end
          >
            {({ isActive }) => (
              <>
                {page.label}
                {isActive && <motion.div 
                  className="absolute inset-0 rounded-lg -z-10 bg-light-surface dark:bg-dark-surface"
                  layoutId="selected-page"
                />}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="w-35 flex flex-row items-center justify-end">
        <ThemeSelector />
      </div>
    </div>
  );
}

export default Header;
