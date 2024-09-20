import SearchTable from './components/table/SeachTable';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Futuros ingenieros con vision hacia el futuro.</h1>
      </header>
      <main>
        <section>
          <h2>Conferencias</h2>
          <SearchTable/>
        </section>
      </main>
      <footer>
        <p>Made with stress and magic</p>
      </footer>
    </div>
  );
}

export default App;
