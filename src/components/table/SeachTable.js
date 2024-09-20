import React, { useMemo } from 'react';
// import { useTable, useGlobalFilter } from 'react-table';
import { useTable } from 'react-table';
import AccordionItem from '../Acordion/Acordion';

import './SearchTable.css'

const SearchTable = ({ data, title }) => {
  // const [searchInput, setSearchInput] = useState('');

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
    // setGlobalFilter,
  // } = useTable({ columns, data }, useGlobalFilter);
  } = useTable({ columns, data });

  // Handle search input
  // const handleSearch = (e) => {
  //   const value = e.target.value || '';
  //   setSearchInput(value);
  //   setGlobalFilter(value);
  // };

  return (
    <>
      <AccordionItem
        title={title}
      >
        <div className="table-container">
          {/* Search input */}
          {/* <input
            value={searchInput}
            onChange={handleSearch}
            placeholder="Search..."
            className="search-input"
          /> */}

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