import { useEffect, useState } from 'react'
import Section from './Section'
import './Body.css'
import Paginacion from './Paginacion';


    
interface Props{
    title: string
}  

export interface Welcome {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
}

const Body = ({title}: Props) => {


    useEffect(() =>{
        console.log('Se monto el componente');
        fetch('https://course-back-end-dev-fgaj.4.us-1.fl0.io/')//http://localhost:3000
          .then(response => response.json())
          .catch(error => console.log('hubo un error ' + error))
          .then(json => {
            console.log('data ' + JSON.stringify(json));
            setList(json);
          });
        return () => { 
        }
          
        // return () => {}
          // console.log('Se desmonto el componente')
      }, [])
    
    const [list, setList] = useState<Welcome[]>([]);
    const [listaMostrar, setLlistaMostrar] = useState<Welcome[]>([]);
    const [nuevoElemento, setNuevoElemento] = useState<string>("");

    const agregarElemento = () => {
        if (nuevoElemento.trim() !== "") {
            var nuevo: Welcome = {
                id: 1,
                title: nuevoElemento,
                userId: 1,
                completed: true
            }

            setList((prevElementos) => [...prevElementos , nuevo]);
            setNuevoElemento("");
        }
        };
    
    const onDelete = (nombre: String) =>{
        console.log('id a borrar = ' + nombre);
        setList([...list.filter(nombreAux => nombreAux.title != nombre)])
    }

    const resultado = (lista: Welcome[]) =>{
        //console.log('Lista paginada= ' + nombre);
        setLlistaMostrar(lista)
    }

    return (
        <>
        <div className='div_border'>
            <h1> {title} </h1>
            <form  id='form-input'>
                <input type='text' id='Name' className='input' value={nuevoElemento} 
                onChange={(value) => setNuevoElemento(value.target.value)} required/> 
                <button type='submit' className='color-blue' 
                onClick={agregarElemento} >Save</button>
            </form>
            <table >
                <thead className="encabezado-tabla">
                <tr>
                    <th>Ítem</th>
                    <th>Seleccionar</th>
                    <th>Nombre</th>
                    <th>Operaciones</th>
                </tr>
                </thead>
                <Section list={listaMostrar} onDelete={onDelete} />                
            </table>
            <Paginacion list={list} onDelete={resultado} />  
        </div>

     
        <p className="read-the-docs">
            Primer entregable, Miguel Angel Gil Albarracin
        </p>
        </>
    )
}

export default Body
