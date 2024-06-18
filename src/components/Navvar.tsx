import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navvar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <AppBar
      sx={{
        paddingInline: '20px',
        bgcolor: 'white',
        color: 'black',
        boxShadow: 0,
        borderBottom: '1px solid wheat',
      }}
    >
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit'>
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h5'
          component={'div'}
          sx={{ flexGrow: 1, paddingLeft: '20px' }}
        >
          Minhaj
        </Typography>
        <Stack direction={'row'}>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>About</Button>
          <Button
            color='inherit'
            id='service-button'
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleClick}
          >
            Services
          </Button>
          <Button color='inherit'>Query</Button>
        </Stack>
        <Menu
          id='service-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'service-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>cash</MenuItem>
          <MenuItem onClick={handleClose}>bkash</MenuItem>
          <MenuItem onClick={handleClose}>nagod</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navvar;
