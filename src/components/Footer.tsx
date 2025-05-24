import React, { memo } from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Footer() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Jonathan © '}
      <Link color='inherit' href='https://grudis.com/'>
        Grudis
      </Link>
    </Typography>
  )
}

export default memo(Footer)
