import SearchTable from './components/table/SeachTable';

import './App.css';

import ConferenciasData from './Conferencias.json';

function App() {
  console.log(ConferenciasData)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Futuros ingenieros con vision hacia el futuro.</h1>
      </header>
      <main>
        <section>
          <h2>Conferencias</h2>
          <SearchTable data={ConferenciasData['23 SEPTIEMBRE']} title={'23 de septiembre'} />
          <SearchTable data={ConferenciasData['24 SEPTIEMBRE']} title={'24 de septiembre'}  />
          <SearchTable data={ConferenciasData['25 SEPTIEMBRE']} title={'25 de septiembre'}  />
          <SearchTable data={ConferenciasData['26 SEPTIEMBRE']} title={'26 de septiembre'}  />
          <SearchTable data={ConferenciasData['26 SEPTIEMBRE']} title={'27 de septiembre'}  />
        </section>
      </main>
      <footer>
        <p>Made with stress and magic</p>
      </footer>
    </div>
  );
}

export default App;
