import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Cuerpo from './Cuerpo';
import LoginIcon from '@mui/icons-material/Login';
import { Drawer } from '@mui/material';
import Drawers from './Drawer';
export default function ButtonAppBar() {
  const  [abrir, setabrir]=React.useState(false)

  return (
    <Box sx={{ width: {xs:"100%",md:"calc(100% - 220px)"},marginLeft:{xs:"0px",md:"220px"}}}>
      <AppBar position="fixed" sx={{bgcolor:"#020202bc",width: {xs:"100%",md:"calc(100% - 220px)"}}}>
        <Toolbar sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
            <Box>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0, visibility:{xs:"visible",md:"hidden"}}}
    onClick={()=>setabrir(true)}
   >
    <MenuIcon/>
          </IconButton>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1}}
          >
        <ArrowLeftIcon/>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
<ArrowRightIcon/>
          </IconButton>
            </Box>
         
         <Box sx={{display:"flex",gap:2}} >
         <Button color="inherit" size='small' sx={{fontWeight:800}} >Registrar</Button>
         <Button   variant='contained' color="inherit" size='small' sx={{
            display:{xs:"none",sm:"block"},p:0.8,px:2,borderRadius:10,color:"black",fontWeight:800
         }}>Iniciar Sesion</Button>
         
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{display:{xs:"block",sm:"none"}}}
          >
        <LoginIcon/>
          </IconButton>
         </Box>
        
        </Toolbar>
      </AppBar>
      <Box>
      <Cuerpo/>
      </Box>
      <Drawer open={abrir} onClose={()=>setabrir(!abrir)} anchor="left" >
      <Drawers abrir={abrir} setabrir={setabrir}/>
      </Drawer>
    </Box>


  );
}