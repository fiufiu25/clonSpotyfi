import { Box, Button } from '@mui/material'
import Navbar from "../src/Components/Navbar"
import Drawers from "./Components/Drawer"
import React from 'react'
import Cuerpo from './Components/Cuerpo'
import Barraabajo from './Components/barraabajo'

export default function App() {
  return (
    <>
<Box sx={{display:"flex"}}>
<Box sx={{bgcolor:"#121212", display:{xs:"none", md:"block"}}}>

<Drawers/>
</Box>
<Box sx={{bgcolor:"#121212" }}>
<Navbar/>
</Box>

</Box>

<Box sx={{position:"fixed",bottom:0,left:0,p:1,bgcolor:"rgba(0, 0, 0, 0.46)"
, width:"100%",borderRadius:5,display:{xs:"block",sm:"none"}
}}><Barraabajo/></Box>
     

   
    
    </>
  )
}
