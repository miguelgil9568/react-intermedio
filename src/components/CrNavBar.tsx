import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo-3.png'
import { Badge, CardMedia, ThemeProvider, createTheme } from '@mui/material';
import { darkTheme } from '../styles/darkTheme';
import { AccountCircle } from '@mui/icons-material';
import { useAppSelector } from '../hooks/store';
import CrModalCarrito from './CrModalCarrito';

const pages = ['¿Quienes somos?', 'Contactenos', 'Dejanos tu opinión'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function CrNavBar() {

  const carrito = useAppSelector((state) => state);
  console.log('carrito '+ JSON.stringify(carrito));
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorElCarrito, setAnchorElCarrito] = React.useState<null | HTMLElement>(null);

  const handleOpenNavCarrito = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCarrito(event.currentTarget);
  };

  const handleCloseNavCarrito = () => {
    setAnchorElCarrito(null);
  };




  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" > 
        <Container maxWidth="xl" >
          <Toolbar disableGutters >
            
              
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
              <CardMedia component={"img"}
                style={{
                  width: '50 px'
                }}
                sx={{width: 70 ,display: { xs: 'flex', md: 'flex' }, mr: 1 }}
                image={logo}
                title="Contemplative Reptile"
                />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MUNDO ANIMAL
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } , padding: '1rem'}}>
              <IconButton size="large" aria-label="show 4 new mails" onClick={handleOpenNavCarrito} color="inherit">
                <Badge badgeContent={carrito.carrito.length} color="error">
                  <ShoppingCartIcon></ShoppingCartIcon>
                </Badge>
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElCarrito}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElCarrito)}
                onClose={handleCloseNavCarrito}
                >
                <CrModalCarrito items={carrito.carrito}></CrModalCarrito>
              </Menu>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit">
                <Badge badgeContent={15} color="error">
                  <MarkUnreadChatAltIcon />
                </Badge>
              </IconButton>
              
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default CrNavBar;