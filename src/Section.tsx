import { Welcome } from "./Body";

interface Props{
    onDelete: (nombre: String ) => void,
    list: Welcome[]
}

const Section = ({ onDelete, list}: Props) => {
    

  eleminarElemento : (index: number) =>{
    console.log(index)
    const nuevaLista = [...list];
    nuevaLista.splice(index, 1);
    list = nuevaLista;
    console.log('nueva lista  = '+ list)
  }


  return (
    <>
      <tbody className="cuerpo-tabla">
            {list.map((obj, index) =>(
                <tr >
                    <td>{index + 1}</td>
                    <td className="table-check"><input type='checkbox'></input></td>
                    <td>{obj.title}</td>
                    <td>{obj.completed ? 'Completado' : 'No completado'}</td>
                    <td className="type-number">
                        <button className='color-red' 
                        onClick={() => onDelete(obj.title)}>Delete</button></td>
                </tr>)) 
            }
        </tbody>
    </>
  )
}

export default Section