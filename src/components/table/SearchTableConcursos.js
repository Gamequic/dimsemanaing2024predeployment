import { useState, useMemo } from "react";

import SearchTable from "./SeachTable";

const SearchTableConcursos = ({ data, title, children }) => {
    const [visibleColumns, setVisibleColumns] = useState({
        PROGRAMA: true,
        NOMBRE: true,
        FECHA: true,
        LUGAR: true,
        ORGANIZADORES: false,
        CORREO: false,
        // Liga: true,
      });
    
      const columns = useMemo(
        () => [
          { Header: 'Programa', accessor: 'Programa', show: visibleColumns.PROGRAMA },
          { Header: 'Nombre', accessor: 'Nombre', show: visibleColumns.NOMBRE },
          { Header: 'FECHA', accessor: 'FECHA', show: visibleColumns.FECHA },
          { Header: 'Hora', accessor: 'HORA', show: visibleColumns.FECHA },
          { Header: 'Lugar', accessor: 'LUGAR', show: visibleColumns.LUGAR },
          { Header: 'Instructor', accessor: 'Instructor', show: visibleColumns.ORGANIZADORES },
          { Header: 'Correo', accessor: 'Correo', show: visibleColumns.CORREO },
        //   { 
        //     Header: 'Liga', 
        //     accessor: 'Liga',
        //     show: visibleColumns.Liga,
        //     Cell: ({ value }) => (
        //       value && value.startsWith('http') ? (
        //         <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
        //       ) : (
        //         value
        //       )
        //     ),
        //   },
        ].filter(column => column.show),
        [visibleColumns]
      );

    return (
        <SearchTable
            children={children}
            title={title}
            data={data}
            visibleColumns={visibleColumns}
            setVisibleColumns={setVisibleColumns}
            columns={columns}
        />
     )
}

export default SearchTableConcursos;