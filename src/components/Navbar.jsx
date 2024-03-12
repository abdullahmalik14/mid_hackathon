import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from './Navlist';
import { useDispatch, useSelector } from 'react-redux';
import Custom_button from './Custom_button';
import { signOut } from 'firebase/auth';
import { set_user_auth } from '../store/slice/user_auth_slice';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

function Navbar(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Logout_handle = () => {
    // Call signOut function to sign out the current user
    signOut(auth)
      .then(() => {
        // Dispatch the action to set user authentication state to false
        dispatch(set_user_auth({ auth: false }));
        console.log('User signed out successfully');
        navigate('/login')
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const user_auth_state = useSelector((state) => state.user_auth);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
    
      onClick={handleDrawerToggle}
    >
      <Box>
        <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
          MUI
        </Typography>
        <Divider />
        <List>
        {navItems.map((item, index) => {
  // Render the item only if authentication is not required or the user is authenticated
  const { auth_required } = item
  if (!auth_required || user_auth_state) {
    return (
      <Box key={index} className='d-flex'>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to={item.link}>
              <ListItemText primary={item.label} />
            </Link>
          </ListItemButton>
        </ListItem>
      </Box>
    );
  } else {
    return null; // Don't render the item if authentication is required and the user is not authenticated
  }
})}
    </List>
      </Box>
      <Box>
        {!user_auth_state.user_auth ? (
          <Custom_button onClick={Logout_handle}>
            Logout
          </Custom_button>
        ) : null}
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {navItems.map((item, index) => {
  // Render the item only if authentication is not required or the user is authenticated
  const { auth_required } = item
  if (!auth_required || user_auth_state) {
    return (
      <Box key={index} className='d-flex'>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to={item.link}>
              <ListItemText primary={item.label} />
            </Link>
          </ListItemButton>
        </ListItem>
      </Box>
    );
  } else {
    return null; // Don't render the item if authentication is required and the user is not authenticated
  }
})}
            {user_auth_state.user_auth ? (
              <Custom_button  onClick={Logout_handle}>
                Logout
              </Custom_button>
            ) : null}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export { Navbar };
