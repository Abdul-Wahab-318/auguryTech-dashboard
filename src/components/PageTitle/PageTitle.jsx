import React from 'react'
import { Typography } from '@mui/material'
export default function PageTitle({ className , children }) {
  return (
    <Typography variant='h5' className={className} sx={{fontWeight:'bold'}}>
      { children }
    </Typography>
  )
}
