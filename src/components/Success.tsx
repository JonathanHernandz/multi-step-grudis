import React from 'react'
import Typography from '@mui/material/Typography'

export default function Success() {
  return (
    <>
      <Typography variant='h2' align='center' sx={{ py: 4 }}>
        ¡Gracias!
      </Typography>
      <Typography component='p' align='center'>
        Tus datos fueron registrados correctamente
      </Typography>
    </>
  )
}
