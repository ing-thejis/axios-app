import React from 'react';
import { AppBar, Box, List, ListItem, ListItemText } from '@material-ui/core'

export default function Navbar(props) {

    const {setState} = props

    return (
    <Box >
      <AppBar position="static">
       
            <List sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <ListItem onClick={()=>setState('works')} >
                    <ListItemText primary="Works" />
                </ListItem>
                <ListItem onClick={()=>setState('events')} > 
                <ListItemText primary="Events" />
                </ListItem>
            </List>

      </AppBar>
    </Box>
  );
}