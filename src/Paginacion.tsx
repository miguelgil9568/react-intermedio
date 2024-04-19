import { useEffect, useState } from 'react';
import { Welcome } from './Body';

interface Props{
    onDelete: (list:Welcome[]) => void,
    list: Welcome[]
}

const ElementosPorPagina = 5;

const Paginacion = ({onDelete ,list}: Props) => {


  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(list.length / ElementosPorPagina);

  const handlePaginaAnterior = () => {
    setPaginaActual((prev) => Math.max(prev - 1, 1));
    onDelete(mostrarDatos)
  };

  const handlePaginaSiguiente = () => {
    setPaginaActual((prev) => Math.min(prev + 1, totalPaginas));
    onDelete(mostrarDatos)
  };

  const mostrarDatos = list.slice(
    (paginaActual - 1) * ElementosPorPagina,
    paginaActual * ElementosPorPagina
  );

  useEffect(() =>{
    onDelete(mostrarDatos)
    return () => { 
    }
  }, [list])


    
  
  return (
    <div>
      {/* Renderizar tus datos actuales */}
      {/*mostrarDatos.map((dato) => (
        <div key={dato.id}>{dato.title}</div>
      ))*/}

      {/* Controles de paginación */}
      <div>
        <button onClick={handlePaginaAnterior} disabled={paginaActual === 1}>
          Anterior
        </button>
        <span>
          Página {paginaActual} de {totalPaginas}
        </span>
        <button onClick={handlePaginaSiguiente} disabled={paginaActual === totalPaginas}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Paginacion