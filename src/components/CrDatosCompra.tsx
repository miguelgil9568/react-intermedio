import React from 'react'
import { Formik } from 'formik'
import *  as Yup from 'yup'

const validateScheme = Yup.object().shape  ({
    nombre: Yup.string().required('El nombre es requerido'),
    correo: Yup.string().required('El correo es requerido'),
    direccion: Yup.string().required('El direccion es requerido'),
    complemento: Yup.string().required('El complemento es requerido'),
})

const CrDatosCompra = () => {
  return (
    <>
        <Formik 
        initialValues={{
            nombre: '',
            correo: '',
            direccion: '',
            complemento: '',
        }}

        validationSchema={validateScheme}

        validate={(value)=>{
            const errors: any = {};

            if(!value.nombre){
                errors.nombre = 'El nombre es requerido000';
            }
            if(!value.correo){
                errors.correo = 'El correo es requerido';
            }
            if(!value.direccion){
                errors.direccion = 'El direccion es requerido';
            }
            if(!value.complemento){
                errors.complemento = 'El complemento es requerido';
            }

            return errors;

        }}
        onSubmit={(values) => {
            console.log('Enviado a formik ', values);
        }}>
            {({handleChange, handleSubmit ,values, errors})=>(
                
                <form  onSubmit={handleSubmit} className='formulario'>
                    <div>
                        <label htmlFor="nombre" >
                            Nombres
                        </label>
                        <input value={values.nombre} onChange={handleChange} 
                        type="text" name='nombre' id='nombre' 
                        placeholder='nombre' />
                        <span> {errors.nombre} </span>
                    </div>

                    <div>
                        <label htmlFor="correo" >
                            Correo electronico
                        </label>
                        <input value={values.correo} onChange={handleChange} 
                        type="text" name='correo' id='correo' 
                        placeholder='correo' />
                        <span> {errors.correo} </span>
                    </div>

                    <div>
                        <label htmlFor="direccion" >
                            Direccion
                        </label>
                        <input value={values.direccion} onChange={handleChange} 
                        type="text" name='direccion' id='direccion' 
                        placeholder='direccion' />
                        <span> {errors.direccion} </span>
                    </div>

                    <div>
                        <label htmlFor="complemento" >
                            Complemento (Ayudanos a encontrarte)
                        </label>
                        <input value={values.complemento} onChange={handleChange} 
                        type="text" name='complemento' id='complemento' 
                        placeholder='complemento' />
                        <span> {errors.direccion} </span>
                    </div>

                    <button type='submit' color='primary' >Enviar</button>    
                </form>

            )}
        </Formik>
    </>
  )
}

export default CrDatosCompra