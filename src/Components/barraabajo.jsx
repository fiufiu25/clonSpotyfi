import React from 'react'
import {Box,IconButton} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import WifiIcon from '@mui/icons-material/Wifi';
export default function Barraabajo() {
  return (
  <>
  <Box>
<Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
 <IconButton>
    <HomeIcon sx={{color:"white"}}/>
    </IconButton>  
    <IconButton>
    <SearchIcon sx={{color:"white"}}/>
    </IconButton> 
    <IconButton>
    <BookmarksIcon sx={{color:"white"}}/>
    </IconButton> 
    <IconButton>
    <WifiIcon sx={{color:"white"}}/>
    </IconButton>  
</Box>
  </Box>
  </>
  )
}
