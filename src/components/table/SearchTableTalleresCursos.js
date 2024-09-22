import { useState, useMemo } from "react";

import SearchTable from "./SeachTable";

const SearchTableTalleresCursos = ({ data, title, children }) => {
    const [visibleColumns, setVisibleColumns] = useState({
        PROGRAMA: true,
        CONFERENCIA: true,
        FECHA: true,
        LUGAR: true,
        ORGANIZADORES: false,
        CORREO: false,
        // Liga: true,
      });
    
      const columns = useMemo(
        () => [
          { Header: 'PROGRAMA', accessor: 'PROGRAMA', show: visibleColumns.PROGRAMA },
          { Header: 'TEMA', accessor: 'TEMA', show: visibleColumns.CONFERENCIA },
          { Header: 'FECHA', accessor: 'FECHA', show: visibleColumns.FECHA },
          { Header: 'Hora', accessor: 'HORA', show: visibleColumns.FECHA },
          { Header: 'Lugar', accessor: 'LUGAR', show: visibleColumns.LUGAR },
          { Header: 'Conferencista', accessor: 'CONFERENCISTA', show: visibleColumns.ORGANIZADORES },
          { Header: 'Maestros de Ceremonias', accessor: 'MAESTROS DE CEREMONIAS', show: visibleColumns.ORGANIZADORES },
          { Header: 'RESPONSABLES DE CONFERENCIA', accessor: 'RESPONSABLES DE CONFERENCIA', show: visibleColumns.ORGANIZADORES },
          { Header: 'Empresa', accessor: 'EMPRESA', show: visibleColumns.ORGANIZADORES },
          { Header: 'CORREO ELECTRÓNICO DEL RESPONSABLE', accessor: 'CORREO ELECTRÓNICO DEL RESPONSABLE', show: visibleColumns.CORREO },
          { Header: 'CORREO ELECTRÓNICO DEL CONFERENCISTA', accessor: 'CORREO ELECTRÓNICO DEL CONFERENCISTA', show: visibleColumns.CORREO },
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

export default SearchTableTalleresCursos;