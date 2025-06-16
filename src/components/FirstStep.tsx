import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AppContext } from '../Context'

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(AppContext)
  const { nombre1, nombre2, apellidoPaterno, apellidoMaterno } = formValues

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({nombre1, nombre2, apellidoPaterno, apellidoMaterno }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, nombre1, nombre2, apellidoPaterno, apellidoMaterno]
  )

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Primer Nombre'
            name='nombre1'
            placeholder='Tu primer nombre'
            value={nombre1.value}
            onChange={handleChange}
            error={!!nombre1.error}
            helperText={nombre1.error}
            required={nombre1.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Segundo Nombre'
            name='nombre2'
            placeholder='Tu segundo nombre'
            value={nombre2.value}
            onChange={handleChange}
            error={!!nombre2.error}
            helperText={nombre2.error}
            required={nombre2.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Apellido Paterno'
            name='apellidoPaterno'
            placeholder='Apellido Paterno'
            value={apellidoPaterno.value}
            onChange={handleChange}
            error={!!apellidoPaterno.error}
            helperText={apellidoPaterno.error}
            required={apellidoPaterno.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Apellido Materno'
            name='apellidoMaterno'
            placeholder='Apellido Materno'
            value={apellidoMaterno.value}
            onChange={handleChange}
            error={!!apellidoMaterno.error}
            helperText={apellidoMaterno.error}
            required={apellidoMaterno.required}
          />
        </Grid>

      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='contained'
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color='primary'
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  )
}
