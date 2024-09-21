import ImageViewer from './components/ImageGallery/ImageGallery';

import SearchTable from './components/table/SeachTable';

import './App.css';

import ConferenciasData from './Conferencias.json';
import SearchTableCONREDES from './components/table/SeachTableCONREDES';

function App() {
  console.log(`${process.env.PUBLIC_URL}/CONREDES/Calendario.jpg`)

  return (
    <>
      <div className='backgroundDecoration' />
      <div className="App">
        <header className="App-header">
          <img src={`${process.env.PUBLIC_URL}/Header.png`} alt="Descripción" />
        </header>
        <main>
          <section>
            <h2>Conferencias</h2>
            <SearchTable data={ConferenciasData['23 SEPTIEMBRE']} title={'23 de septiembre'} />
            <SearchTable data={ConferenciasData['24 SEPTIEMBRE']} title={'24 de septiembre'} />
            <SearchTable data={ConferenciasData['25 SEPTIEMBRE']} title={'25 de septiembre'} />
            <SearchTableCONREDES data={ConferenciasData['25 SEPTIEMBRE CONREDES']} title={'25 de septiembre Evento CONREDES'} >
              <h2>Folletos</h2>
              <ImageViewer></ImageViewer>
            </SearchTableCONREDES>
            <SearchTable data={ConferenciasData['26 SEPTIEMBRE']} title={'26 de septiembre'} />
            <SearchTable data={ConferenciasData['26 SEPTIEMBRE']} title={'27 de septiembre'} />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
