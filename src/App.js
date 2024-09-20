import SearchTable from './components/table/SeachTable';

import './App.css';

import ConferenciasData from './Conferencias.json';

function App() {
  return (
    <>
      <div className='Background' />
      <div 
        className='backgroundDecoration'
        style={{left: '5%', bottom: '10%', backgroundColor: 'red'}}
      />
      <div 
        className='backgroundDecoration'
        style={{left: '15%', bottom: '50%', backgroundColor: "rebeccapurple"}}
      />
      <div 
        className='backgroundDecoration'
        style={{left: '70%', bottom: '40%', backgroundColor: 'blueviolet'}}
      />
      <div 
        className='backgroundDecoration'
        style={{left: '40%', bottom: '10%', backgroundColor: 'pink'}}
      />
      <div 
        className='backgroundDecoration'
        style={{left: '40%', bottom: '10%', backgroundColor: 'blue'}}
      />
      <div className="App">
        <header className="App-header">
          <img src={`${process.env.PUBLIC_URL}/Header.png`} alt="Descripción" />
        </header>
        <main>
          <section>
            <h2>Semana de Ingeniería 2024</h2>
            <SearchTable data={ConferenciasData['23 SEPTIEMBRE']} title={'23 de septiembre'} />
            <SearchTable data={ConferenciasData['24 SEPTIEMBRE']} title={'24 de septiembre'}  />
            <SearchTable data={ConferenciasData['25 SEPTIEMBRE']} title={'25 de septiembre'}  />
            <SearchTable data={ConferenciasData['26 SEPTIEMBRE']} title={'26 de septiembre'}  />
            <SearchTable data={ConferenciasData['26 SEPTIEMBRE']} title={'27 de septiembre'}  />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
