import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import LogoImage from "../../assets/logo_small.png";
import {useAuthDispatch, useAuth} from '../../contexts/AuthContext';

export const ButtonAppBar = () => {
  const {username} = useAuth();
  const navigate = useNavigate();
  const authDispatch = useAuthDispatch();
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            <img src={LogoImage}></img>
          </Typography>

          <Button onClick={() => navigate("/")} color="inherit">
            Home
          </Button>
          <Button onClick={() => navigate("/how-it-works")} color="inherit">
            How it works
          </Button>
          {username && <Button onClick={() => navigate("/profile")} color="inherit">
            My Profile
          </Button>}
          {username && <Button onClick={() => {
            authDispatch({type: 'all', value: {
                                                 username: '',
                                                 email: '',
                                                 firstName: '',
                                                 lastName: '',
                                                 uid: '',
                                               }})
            }} color="inherit" >
            Logout
          </Button>}
          {!username && <Button onClick={() => navigate("/login") } color="inherit">
            Login
          </Button>}
          {!username && <Button onClick={() => navigate("/signup")} color="inherit">
            Signup
          </Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
