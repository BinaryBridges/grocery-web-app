import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function SwipeableTemporaryDrawer({ open, onClose }) {
  const [state, setState] = React.useState({
    left: false,
  });

  React.useEffect(() => {
    setState({ left: open });
  }, [open]);

  const handleClose = () => {
    setState({ left: false });
    onClose();
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      {/* Close Icon */}
      <IconButton 
        onClick={handleClose}
        sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }} // Adjusted for better hitbox
      >
        <CloseIcon />
      </IconButton>
      
      {/* List Items */}
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={state.left}
      onClose={handleClose}
    >
      {list()}
    </SwipeableDrawer>
  );
}