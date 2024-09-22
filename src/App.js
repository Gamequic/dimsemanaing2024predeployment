import ImageViewer from './components/ImageGallery/ImageGallery';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './App.css';

import SearchTableCONREDES from './components/table/SeachTableCONREDES';
import SearchTableConferencias from './components/table/SearchTableConferencias';
import SearchTableTalleresCursos from './components/table/SearchTableTalleresCursos';

import ConferenciasData from './Conferencias.json';
import Otros from './Otros.json'
import SearchTableConcursos from './components/table/SearchTableConcursos';
import SearchTableActividadesDeportivas from './components/table/SearchTableActividadesDeportivas';

function App() {
  return (
    <>
      <div className='backgroundDecoration' />
      <div className="App">
        <header className="App-header">
          <img src={`${process.env.PUBLIC_URL}/Header.png`} alt="Descripción" />
        </header>
        <main>
          {/* <h1>XXX Semana de ingeniería<br /> Conferencias del departamento de ingeniería industrial y manufactura</h1> */}
          {/* <section>
            <AccordionItem
              title={'Conferencias'}
            >
              <SearchTable data={ConferenciasData['23 SEPTIEMBRE']} title={'23 de septiembre'} />
              <SearchTable data={ConferenciasData['24 SEPTIEMBRE']} title={'24 de septiembre'} />
              <SearchTable data={ConferenciasData['25 SEPTIEMBRE']} title={'25 de septiembre'} />
              <SearchTableCONREDES data={ConferenciasData['25 SEPTIEMBRE CONREDES']} title={'25 de septiembre Evento CONREDES'} >
                <h2>Folletos</h2>
                <ImageViewer></ImageViewer>
              </SearchTableCONREDES>
              <SearchTable data={ConferenciasData['26 SEPTIEMBRE']} title={'26 de septiembre'} />
              <SearchTable data={ConferenciasData['26 SEPTIEMBRE']} title={'27 de septiembre'} />
            </AccordionItem>
            <AccordionItem
              title={'Concursos'}
              orientation='horizontal'
            >
              
            </AccordionItem>
            <AccordionItem
              title={'Talleres y cursos'}
              orientation='horizontal'
            >
              
            </AccordionItem>
            <AccordionItem
              title={'Actividades deportivas'}
              orientation='horizontal'
            >
              
            </AccordionItem> */}
          {/* </section> */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Conferencias
            </AccordionSummary>
            <AccordionDetails>
              <SearchTableConferencias data={ConferenciasData['23 SEPTIEMBRE']} title={'23 de septiembre'} />
              <SearchTableConferencias data={ConferenciasData['24 SEPTIEMBRE']} title={'24 de septiembre'} />
              <SearchTableConferencias data={ConferenciasData['25 SEPTIEMBRE']} title={'25 de septiembre'} />
              <SearchTableCONREDES data={ConferenciasData['25 SEPTIEMBRE CONREDES']} title={'25 de septiembre Evento CONREDES'} >
                <h2>Folletos</h2>
                <ImageViewer></ImageViewer>
              </SearchTableCONREDES>
              <SearchTableConferencias data={ConferenciasData['26 SEPTIEMBRE']} title={'26 de septiembre'} />
              <SearchTableConferencias data={ConferenciasData['26 SEPTIEMBRE']} title={'27 de septiembre'} />
            </AccordionDetails>
          </Accordion>
          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Talleres y cursos
            </AccordionSummary>
            <AccordionDetails> */}
              <SearchTableTalleresCursos
                title={"Talleres y cursos"}
                data={Otros['talleres y cursos']}
              />
            {/* </AccordionDetails>
          </Accordion> */}
          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Concursos
            </AccordionSummary>
            <AccordionDetails> */}
              <SearchTableConcursos
                title={"Concursos"}
                data={Otros.concursos}
              />
            {/* </AccordionDetails>
          </Accordion> */}
          {/* <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Actividades deportivas
            </AccordionSummary>
            <AccordionDetails> */}
              <SearchTableActividadesDeportivas
                title={'Activadades Deportivas'}
                data={Otros['actividades deportivas']}
              />
            {/* </AccordionDetails>
          </Accordion> */}
        </main>
      </div>
    </>
  );
}

export default App;
