import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QueueIcon from '@mui/icons-material/Queue';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {IconButton} from "@mui/material"
import CancelIcon from '@mui/icons-material/Cancel';
export default function Drawers({abrir, setabrir}) {
  return (
    <Box sx={{ width:"220px", bgcolor:"black",height:"100vh",color:"white",position:"fixed",top:0,left:0 }}>
      <nav aria-label="main mailbox folders">
        <List>
          <Box sx={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
          <Box component={"img"} src='https://1000marcas.net/wp-content/uploads/2019/12/Spotify-logo.png'
            height={60} width={150}
            sx={{m:1,mb:3}}
            />
            <IconButton sx={{display:{xs:"block",md:"none"}}} onClick={()=>setabrir(!abrir)}>
<CancelIcon sx={{fontSize:40,color:"white"}}/>
            </IconButton>
          </Box>
            
          <ListItem disablePadding>
            <ListItemButton sx={{mt:1}}>
              <ListItemIcon>
               <HomeIcon  sx={{color:"white"}}/>      
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{mt:1}}>
              <ListItemIcon>
               <SearchIcon sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText primary="Buscar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{mt:1}}>
              <ListItemIcon>
                <BookmarksIcon sx={{color:"white"}} />
              </ListItemIcon>
              <ListItemText primary="Tus colecciones" />
            </ListItemButton>
          </ListItem>
          <br />
          <ListItem disablePadding>
            <ListItemButton sx={{mt:1}}>
              <ListItemIcon>
                <QueueIcon  sx={{color:"white"}} />
              </ListItemIcon>
              <ListItemText primary="Crear Playlist" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{mt:1}}>
              <ListItemIcon>
                <FavoriteIcon  sx={{color:"red"}}/>
              </ListItemIcon>
              <ListItemText primary="Tus me gusta" />
            </ListItemButton>
          </ListItem>
        </List>
     
        
    
      </nav>
 
  
   
    </Box>
  );
}