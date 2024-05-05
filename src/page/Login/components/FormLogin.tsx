import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import { Formik, FormikHelpers } from 'formik'

import React from 'react'

const initialValues = {
    user: '',
    password: ''
}





const FormLogin = () => {
  return (
  <>
    <Formik initialValues={initialValues} 
    children={[
        
    ]} 
    onSubmit={function (values: { user: string; password: string }, formikHelpers: FormikHelpers<{ user: string; password: string }>): void | Promise<any> {
        console.log(values);
    } }    
   // validate={(values) => {
    //     const error = {}
    // }}
    > 
        
    </Formik>
    <TextField
            id="outlined-helperText"
            label="Usuario"
            helperText="Ingrese su usuario de acceso"
            variant="outlined"
            />
        <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                />
        <Button variant="contained" color="primary" style={{padding: 10, margin: 8}}>
        Iniciar Sesion
        </Button>
  </>
  )
}

export default FormLogin