import React, { useState } from "react";
import { FaBell, FaSignOutAlt, FaMoon, FaSun } from "react-icons/fa";
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"; 


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function FirstPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light" : "dark";
  };


  const toggleSidebar = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsSidebarOpen(open);
  };

  const handleMenuSelection = (menu) => {
    setSelectedMenu(menu);
    setIsSidebarOpen(false); 
  };

 
  const sidebarList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleSidebar(false)}
      onKeyDown={toggleSidebar(false)}
    >
      <List>
        {['Product Data', 'Master Data', 'Customer Data'].map((text) => (
          <ListItem button key={text} onClick={() => handleMenuSelection(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div
      className={`min-h-screen flex ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
   
      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar(false)}>
        {sidebarList()}
      </Drawer>

      
      <div className="flex-1 flex flex-col">
      
        <AppBar position="static" sx={{ backgroundColor: isDarkMode ? '#333' : '#fff' }}>
          <Toolbar>
            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleSidebar(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Dashboard
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <div className="flex items-center gap-4">
              <button className="relative">
                <FaBell className="text-2xl hover:text-yellow-500" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <FaSun className="text-2xl text-yellow-400" />
                ) : (
                  <FaMoon className="text-2xl text-gray-800" />
                )}
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </Toolbar>
        </AppBar>

        
        <main className="flex-1 px-6 py-8">
          <h1 className="text-2xl font-bold text-center mb-8">Welcome to the {selectedMenu}</h1>

          
          {selectedMenu === "Product Data" && (
            <div className="text-center">
              <h2 className="text-lg font-bold">Product Data Content</h2>
              <p>Here is the content related to Product Data.</p>
            </div>
          )}

          {selectedMenu === "Master Data" && (
            <div className="text-center">
              <h2 className="text-lg font-bold">Master Data Content</h2>
              <p>Here is the content related to Master Data.</p>
            </div>
          )}

          {selectedMenu === "Customer Data" && (
            <div className="text-center">
              <h2 className="text-lg font-bold">Customer Data Content</h2>
              <p>Here is the content related to Customer Data.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default FirstPage;
