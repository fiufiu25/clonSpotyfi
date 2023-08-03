import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function CarsMusica() {
  return (
    <>
    {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(item=>(
            <Box className="cars" key={item} sx={{position:"relative",borderRadius:3,m:1, width:200, height:310,bgcolor:"#1D1D1D",display:"flex",
            flexDirection:"column",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
            <Box >
                <Box sx={{textAlign:"center",position:"relative",m:1.5}}>
                <Box component={"img"} sx={{borderRadius:3,width:"100%"}}  height={180}  src='https://i.scdn.co/image/ab67706c0000da843deb54eed72cd06c33c9db9a'/>
              
                <Box sx={{position:"absolute",right:5,bottom:10}} className="buttonplay">
            <Box sx={{bgcolor:"#1FDF64",borderRadius:"50%"}} className="cajaicons" >
            <IconButton color="primary" >
                <PlayArrowIcon sx={{color:"black"}}/>
            </IconButton>
            </Box>
            
                </Box>
                </Box>
              
                <Box sx={{px:2}}>
                    <Typography  variant='body1' sx={{color:"white",fontWeight:900,mb:2}}>
                        Today´s Top Hits
                    </Typography>
                    <Typography variant='body2' sx={{color:"#A7A7A7"}}>
                     SZA is on top of the Hottest 50!
                    </Typography>
                </Box>
             
            </Box>
            
                </Box>
        ))
    }
  
    </>
  )
}
