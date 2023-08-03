import { Box, Typography } from '@mui/material'
import React from 'react'
import CarsMusica from './CarsMusica'
import { WidthFull } from '@mui/icons-material'

export default function Cuerpo() {
  return (
<>
<Box sx={{px:2,pt:8}}>
<Box sx={{m:1,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <Typography variant='h5' sx={{color:"white" , fontWeight:600}}>
        Spotify Playlists
    </Typography>
    <Typography variant='body2' sx={{color:"white",fontWeight:600}}>
      Ver todo
    </Typography>
</Box>
<Box sx={{display:"flex", justifyContent:"center",alignContent:"center",flexWrap:"wrap"}}>
<CarsMusica/>

</Box>
</Box>

</>
  )
}
