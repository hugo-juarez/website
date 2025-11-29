import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  const [page, setPage] = useState<string>('home');
  
  return (
    <div className="bg-light-bg text-light-text h-screen dark:bg-dark-bg dark:text-dark-text">
      <Header page={page} onPageSelect={setPage}/>
      {page === 'home' && <Home />}
    </div>
  );
}

export default App;
