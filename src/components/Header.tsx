import React, { memo } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' color='inherit' noWrap>
          Multi Step Form - GRUDIS
        </Typography>
        <IconButton color='inherit' aria-label='Github' sx={{ ml: 'auto' }} size='large'>
          <Link
            title='Github'
            component='a'
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/JonathanHernandz'
            color='inherit'
          >
            <SvgIcon component='svg'>
              <path d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3' />
            </SvgIcon>
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default memo(Header)
