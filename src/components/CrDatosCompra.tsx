import React, { useState } from 'react'
import { Formik } from 'formik'
import *  as Yup from 'yup'
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Typography from '@mui/joy/Typography';
import Checkbox from '@mui/joy/Checkbox';
import Button from '@mui/joy/Button';

import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Card from '@mui/joy/Card';
import {  CardHeader, FormControl, FormLabel, Select } from '@mui/material'


const validateScheme = Yup.object().shape  ({
    nombre: Yup.string().required('El nombre es requerido'),
    correo: Yup.string().required('El correo es requerido'),
    direccion: Yup.string().required('El direccion es requerido'),
    numeroContacto: Yup.number().required('El numero de contacto es requerido')
})

const CrDatosCompra = () => {
    
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);



    return (

        <>  
        
        <div style={{paddingTop: '2%'}}>  
            <Card
            variant="outlined"
            sx={{
                maxHeight: 'max-content',
                maxWidth: '65%',
                mx: 'auto',
                // to make the demo resizable
                overflow: 'auto',
            }}
            >
            <Typography level="h1">
                Dejanos tus datos
            </Typography>
            <Typography level="title-lg" startDecorator={<InfoOutlined />}>
                !Hola!, pronto uno de nuestros asesores se contactara contigo
            </Typography>
            <Divider inset="none" />        
            <Formik 
            initialValues={{
                nombre: '',
                apellido: '',
                correo: '',
                direccion: '',
                complemento: '',
                numeroContacto: ''
            }}
    
            validationSchema={validateScheme}
    
            validate={(value)=>{
                const errors: any = {};
    
                if(!value.nombre){
                    errors.nombre = 'El nombre es requerido';
                }
                if(!value.apellido){
                    errors.apellido = 'El apellido es requerido';
                }
                if(!value.correo){
                    errors.correo = 'El correo es requerido';
                }
                if(!value.direccion){
                    errors.direccion = 'El direccion es requerido';
                }
                // if(!value.complemento){
                //     errors.complemento = 'El complemento es requerido';
                // }
                if(!value.numeroContacto){
                    errors.numeroContacto = 'El numero de contacto es requerido';
                }
    
                return errors;
    
            }}
            onSubmit={(values) => {
                    console.log('Enviado a formik con valores', values);
                    window.alert('informacion adquirida con a formik con valores '+ (JSON.stringify(values)));
                }}>
                {({handleChange, handleSubmit ,values, errors})=>(
                        
                    <form  onSubmit={handleSubmit}>
                        <CardContent
                            sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                            gap: 1.5,
                            }}
                        >
                                    <FormControl >
                                        <FormLabel htmlFor="nombre" >
                                            Nombres
                                        </FormLabel>
                                        <Input value={values.nombre} onChange={handleChange} 
                                        type="text" name='nombre' id='nombre' 
                                        placeholder='Nombre'  />
                                        <span className='span-error'> {errors.nombre} </span>
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel htmlFor="apellido" >
                                            Apellidos
                                        </FormLabel>
                                        <Input value={values.apellido} onChange={handleChange} 
                                        type="text" name='apellido' id='apellido' 
                                        placeholder='Nombre'  />
                                        <span className='span-error'> {errors.apellido} </span>
                                    </FormControl>
                                    
                                   
    
                                    <FormControl>
                                        <FormLabel htmlFor="correo" >
                                            Correo electronico
                                        </FormLabel>
                                        <Input value={values.correo} onChange={handleChange} 
                                        type="text" name='correo' id='correo' 
                                        placeholder='Correo' />
                                        <span className='span-error'> {errors.correo} </span>
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel htmlFor="numeroContacto" >
                                            Numero de contacto
                                        </FormLabel>
                                        <Input value={values.numeroContacto}  onChange={handleChange} 
                                        type="number" name='numeroContacto' id='numeroContacto' 
                                        placeholder='Numero de contacto' />
                                        <span className='span-error'> {errors.numeroContacto} </span>
                                    </FormControl>
                                    <FormControl sx={{ gridColumn: '1/-1' }}>
                                        <FormLabel htmlFor="direccion" sx={{ gridColumn: '1/-1' }} >
                                            Direccion
                                        </FormLabel>
                                        <Input value={values.direccion} onChange={handleChange} 
                                        type="text" name='direccion' id='direccion' 
                                        placeholder='Direccion' />
                                        <span className='span-error'> {errors.direccion} </span>
                                    </FormControl>
                                    
                                    <FormControl sx={{ gridColumn: '1/-1' }}>
                                        <FormLabel htmlFor="complemento" >
                                            Informacion adicional (Opcional) 
                                        </FormLabel>
                                        <Input value={values.complemento} onChange={handleChange} 
                                        type="text" name='complemento' id='complemento' 
                                        placeholder='Complemento' />
                                        <span className='span-error'> {errors.direccion} </span>
                                    </FormControl>
    
                                        
                            {/* <FormControl sx={{ gridColumn: '1/-1' }}>
                                        <FormLabel>Card number</FormLabel>
                                        <Input endDecorator={<CreditCardIcon />} />
                            </FormControl>
                            <FormControl>
                            <FormLabel>Expiry date</FormLabel>
                            <Input endDecorator={<CreditCardIcon />} />
                            </FormControl>
                            <FormControl>
                            <FormLabel>CVC/CVV</FormLabel>
                            <Input endDecorator={<InfoOutlined />} />
                            </FormControl>
                            <FormControl sx={{ gridColumn: '1/-1' }}>
                            <FormLabel>Card holder name</FormLabel>
                            <Input placeholder="Enter cardholder's full name" />
                            </FormControl> */}
                            <CardActions sx={{ gridColumn: '1/-1' }}>
                                {/* <Button variant="solid" color="primary">
                                    Add card
                                </Button> */}
                                <Button type='submit' color='primary' >Enviar</Button>
                            </CardActions>
                        </CardContent>
                    </form>)}
                </Formik>
            </Card>
           </div> 
        </>
        // <Box sx={{
        //     display: 'flex',
        //     marginTop: 4,
        //     gap: 0,
        //     flexWrap: 'wrap',
        //     paddingInline: '7%',
        //     justifyContent: 'center'
        //   }}>
        //    
        // </Box>
      )
}

export default CrDatosCompra