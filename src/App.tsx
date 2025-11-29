import { useState } from 'react';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-light-bg text-light-text h-screen dark:bg-dark-bg dark:text-dark-text">
      <Header />
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <button
          className="button button-secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
