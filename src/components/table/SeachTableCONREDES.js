import React, { useMemo } from 'react';
// import { useTable, useGlobalFilter } from 'react-table';

import { useTable } from 'react-table';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import './SearchTable.css'

const SearchTableCONREDES = ({ data, title, children }) => {
  // const [searchInput, setSearchInput] = useState('');

  // Define columns
  const columns = useMemo(
    () => [
      { Header: 'Conferencia', accessor: 'CONFERENCIA' },
      { Header: 'Fecha', accessor: 'FECHA' },
      { Header: 'Hora', accessor: 'HORA' },
      { Header: 'Lugar', accessor: 'LUGAR' },
      { Header: 'Conferencista', accessor: 'CONFERENCISTA' }
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
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
          {children}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SearchTableCONREDES;
