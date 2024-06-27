import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './login';
import AddService from './addService';
import DataTable from './dataTable';

export default function Logo(props) {
  const { id, name, address, phone, owner, logo, description } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 5,
              fontFamily: 'Caveat, cursive', // שימוש בגופן Caveat
              color: 'black', // צבע הטקסט שחור
            }}
          >
            {name} {' '}
             {address}  {' '}
             {phone} {' '}
          </Typography>
          <Login />
        </Toolbar>
      </AppBar>
    </Box>
  );
}