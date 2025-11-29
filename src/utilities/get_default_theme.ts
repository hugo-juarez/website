function get_default_theme() {
  //Getting prefered settings
  if (typeof window === 'undefined') {
    return 'light';
  }
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export default get_default_theme;