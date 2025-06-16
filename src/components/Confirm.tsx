import React, { useContext } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { AppContext } from '../Context'


export default function Confirm() {
  const { formValues, handleBack, handleNext } = useContext(AppContext)
  const {nombre1, nombre2, apellidoPaterno, apellidoMaterno, rfc, curp } = formValues

  const handleSubmit = async () => {
    try {
      // Crear un objeto limpio solo con los valores
      const formData = new URLSearchParams()
      Object.keys(formValues).forEach((key) => {
        const field = formValues[key]
        if (field?.value !== undefined) {
          formData.append(key, field.value)
        }
      })

      // Enviar los datos
      const response = await axios.post(
        'https://webmicfx.arashi.solutions/FGR/WsAjaxCoClien',
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )

      console.log('Datos enviados:', response.data)

      // Continuar al siguiente paso
      handleNext()
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText primary='Primer Nombre' secondary={nombre1.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Segundo Nombre' secondary={nombre2.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Apelido Paterno' secondary={apellidoPaterno.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Apellido Materno' secondary={apellidoMaterno.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='CURP' secondary={curp.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='RFC' secondary={rfc.value || 'Not Provided'} />
        </ListItem>

        <Divider />

      </List>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button variant='contained' color='success' onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </Box>
    </>
  )
}
