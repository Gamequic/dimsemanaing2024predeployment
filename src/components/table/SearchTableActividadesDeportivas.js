import { useState, useMemo } from "react";

import SearchTable from "./SeachTable";

const SearchTableActividadesDeportivas = ({ data, title, children }) => {
    const [visibleColumns, setVisibleColumns] = useState({
        EVENTO: true,
        NOMBRE: true,
        FECHA: true,
        LUGAR: true,
        RESPONSAGLE: false,
        CORREO: false,
        // Liga: true,
      });
    
      const columns = useMemo(
        () => [
          { Header: 'EVENTO', accessor: 'EVENTO', show: visibleColumns.EVENTO },
          { Header: 'Nombre', accessor: 'Nombre', show: visibleColumns.NOMBRE },
          { Header: 'FECHA', accessor: 'FECHA', show: visibleColumns.FECHA },
          { Header: 'Hora', accessor: 'HORA', show: visibleColumns.FECHA },
          { Header: 'Lugar', accessor: 'LUGAR', show: visibleColumns.LUGAR },
          { Header: 'RESPONSAGLE', accessor: 'RESPONSAGLE', show: visibleColumns.RESPONSAGLE },
          { Header: 'CORREO ELECTRÓNICO DEL RESPONSABLE', accessor: 'CORREO ELECTRÓNICO DEL RESPONSABLE', show: visibleColumns.CORREO },
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

export default SearchTableActividadesDeportivas;