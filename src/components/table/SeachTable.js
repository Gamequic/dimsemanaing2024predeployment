import React, { useState, useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import AccordionItem from '../Acordion/Acordion';

import './SearchTable.css'

// Example data
const data = [
  {
    "PROGRAMA": "Ingeniería Mecánica",
    "CONFERENCIA": "\"Correlación por espectroscopía de Propiedades físicas y químicas de porcelanas\"",
    "FECHA": "2024-09-23",
    "HORA": "12:00 - 13:00",
    "LUGAR": "Audiovisual de Manufactura Y1-101",
    "CONFERENCISTA": "Dr. Simón Yobanny Reyes López",
    "EMPRESA": "UACJ",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Dra. Manuela Alejandra Zalapa Garibay",
    "Liga": null,
    "APOYO TECNICO": "LAURA, IRVIN, DAVID"
},
{
    "PROGRAMA": "Ingeniería Industrial y de Sistemas",
    "CONFERENCIA": "\"La revolución de la IA: Aprovechando la tecnología para el aprendizaje y el desarrollo profesional\"",
    "FECHA": "2024-09-23",
    "HORA": "18:00 - 19:00",
    "LUGAR": "Audiovisual de Manufactura Y1-101",
    "CONFERENCISTA": "Dra. Yuridia Vega",
    "EMPRESA": "UABC",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Dra. Vianey  Torres Arguelles",
    "Liga": null,
    "APOYO TECNICO": "ALEJANDRO, TONY DAVID"
},
{
    "PROGRAMA": "PROGRAMA",
    "CONFERENCIA": "CONFERENCIA",
    "FECHA": "FECHA",
    "HORA": "HORA",
    "LUGAR": "LUGAR",
    "CONFERENCISTA": "CONFERENCISTA",
    "EMPRESA": "EMPRESA",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA",
    "Liga": "Liga",
    "APOYO TECNICO": "APOYO TECNICO"
},
{
    "PROGRAMA": "Ingeniería Aeronáutica",
    "CONFERENCIA": "Meteorología aeronáutica",
    "FECHA": "2024-09-23",
    "HORA": "10:00 - 11:00",
    "LUGAR": "D206",
    "CONFERENCISTA": "Dr. Carlos Alberto Gómez Álvarez",
    "EMPRESA": "UACJ",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Mtra. Bárbara Alexandra Anaya Sánchez",
    "Liga": null,
    "APOYO TECNICO": "MARIBEL, ITZEL, DEIDY"
},
{
    "PROGRAMA": "Ingeniería Aeronáutica",
    "CONFERENCIA": "ASA Combustibles de la Aviación",
    "FECHA": "2024-09-23",
    "HORA": "11:00 - 12:00",
    "LUGAR": "D206",
    "CONFERENCISTA": "Lic. Gerardo Ramírez Bejarano",
    "EMPRESA": "ASA",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Dr. Carlos Alberto Gómez Álvarez",
    "Liga": null,
    "APOYO TECNICO": null
},
{
    "PROGRAMA": "Ingeniería Aeronáutica",
    "CONFERENCIA": "Uso de software libre para simulación numérica en ingeniería",
    "FECHA": "2024-09-23",
    "HORA": "12:00 - 13:00",
    "LUGAR": "D206",
    "CONFERENCISTA": "Dr. Uzziel Caldiño Herrera",
    "EMPRESA": "UACJ",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Dr. Manuel Alejandro Lira  Martínez",
    "Liga": null,
    "APOYO TECNICO": null
},
{
    "PROGRAMA": "Ingeniería Aeronáutica",
    "CONFERENCIA": "Hypersonic Transition Model for Second Mode and Crossflow Instabilities",
    "FECHA": "2024-09-23",
    "HORA": "16:00 - 17:00",
    "LUGAR": "D206",
    "CONFERENCISTA": "Dr. Bryan Barraza",
    "EMPRESA": "NMSU",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Dr. Manuel Alejandro Lira  Martínez",
    "Liga": null,
    "APOYO TECNICO": "PIZARRO, TAMER "
},
{
    "PROGRAMA": "Ingeniería Aeronáutica",
    "CONFERENCIA": "Mach 5 Flow over Unswept Fin",
    "FECHA": "2024-09-23",
    "HORA": "17:00 - 18:00",
    "LUGAR": "D206",
    "CONFERENCISTA": "Dr. Andreas Gross",
    "EMPRESA": "NMSU",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Dr. Manuel Alejandro Lira  Martínez",
    "Liga": null,
    "APOYO TECNICO": null
},
{
    "PROGRAMA": "Ingeniería Aeronáutica",
    "CONFERENCIA": "Caracterización de recubrimientos superhidrofóbicos",
    "FECHA": "2024-09-23",
    "HORA": "18:00 - 19:00",
    "LUGAR": "D206",
    "CONFERENCISTA": "Mtro. Alfredo Villanueva Montellano",
    "EMPRESA": "UACJ",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Dr. Delfino Cornejo Monroy",
    "Liga": null,
    "APOYO TECNICO": null
},
{
    "PROGRAMA": "PROGRAMA",
    "CONFERENCIA": "CONFERENCIA",
    "FECHA": "FECHA",
    "HORA": "HORA",
    "LUGAR": "LUGAR",
    "CONFERENCISTA": "CONFERENCISTA",
    "EMPRESA": "EMPRESA",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA",
    "Liga": "Liga",
    "APOYO TECNICO": "APOYO TECNICO"
},
{
    "PROGRAMA": "Ingeniería Industrial y de Sistemas;Ingeniería en Sistemas Computacionales;Ingeniería de Software",
    "CONFERENCIA": "\"Innovación en el Tratamiento de la Diabetes Tipo 2: Análisis con Inteligencia Artificial y Métodos de Toma de Decisiones Multicriterio\"",
    "FECHA": "2024-09-23",
    "HORA": "12:15 - 13:45",
    "LUGAR": "TEAMS",
    "CONFERENCISTA": "Dra. Dynhora Danheyda Ramírez Ochoa",
    "EMPRESA": "Universidad Tecnológica de Chihuahua",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Dr. Luis Asunción Pérez Domiguez",
    "Liga": "https://acortar.link/4gmhL1",
    "APOYO TECNICO": null
},
{
    "PROGRAMA": "Ingeniería Industrial y de Sistemas",
    "CONFERENCIA": "Método toma de decisión ",
    "FECHA": "2024-09-23",
    "HORA": "18:00 - 19:30",
    "LUGAR": "TEAMS",
    "CONFERENCISTA": "Lesly Yorley Fonseca Valderrama ",
    "EMPRESA": "Universidad Antonio Nariño",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Dr. Luis Asunción Pérez Domiguez",
    "Liga": "https://acortar.link/tUaYQE",
    "APOYO TECNICO": null
},
{
    "PROGRAMA": "Ingeniería Industrial y de Sistemas",
    "CONFERENCIA": "Impacto del uso de tecnologías Top y su aplicación en la industria",
    "FECHA": "2024-09-23",
    "HORA": "8:30 - 9:45;14:15 - 15:45",
    "LUGAR": "TEAMS",
    "CONFERENCISTA": "Yunellis Del Carmen Burgos Pereira ",
    "EMPRESA": "Universidad Antonio Nariño",
    "MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA": "Dr. Luis Asunción Pérez Domiguez",
    "Liga": "https://acortar.link/ceo6KF",
    "APOYO TECNICO": null
}
];

const SearchTable = () => {
  const [searchInput, setSearchInput] = useState('');

  // Define columns
  const columns = useMemo(
    () => [
      { Header: 'Programa', accessor: 'PROGRAMA' },
      { Header: 'Conferencia', accessor: 'CONFERENCIA' },
      { Header: 'Fecha', accessor: 'FECHA' },
      { Header: 'Hora', accessor: 'HORA' },
      { Header: 'Lugar', accessor: 'LUGAR' },
      { Header: 'Conferencista', accessor: 'CONFERENCISTA' },
      { Header: 'Empresa', accessor: 'EMPRESA' },
      { Header: 'Maestros de Ceremonias', accessor: 'MAESTROS DE CEREMONIAS Y RESPONSABLES DE CONFERENCIA' },
      { Header: 'Liga', accessor: 'Liga' },
      { Header: 'Apoyo Técnico', accessor: 'APOYO TECNICO' },
    ],
    []
  );

  // Set up table with data and columns
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value || '';
    setSearchInput(value);
    setGlobalFilter(value);
  };

  return (
    <>
      <AccordionItem
        title={"23 de septiembre"}
      >
        <div className="table-container">
          {/* Search input */}
          <input
            value={searchInput}
            onChange={handleSearch}
            placeholder="Search..."
            className="search-input"
          />

          {/* Table */}
          <table {...getTableProps()} className="styled-table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </AccordionItem>
    </>
  );
};

export default SearchTable;