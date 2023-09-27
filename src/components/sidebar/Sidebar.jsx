import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  searchIcon: {
    marginRight: theme.spacing(2),
  },
  searchInput: {
    flexGrow: 1,
  },
}));

function Sidebar() {
  const classes = useStyles();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
        {isMenuOpen && (
          <IconButton
            edge="start"
            className={classes.searchIcon}
            color="inherit"
            aria-label="search"
            onClick={toggleSearch}
          >
            <SearchIcon />
          </IconButton>
        )}
        {isSearchOpen ? (
          <InputBase
            className={classes.searchInput}
            placeholder="Search..."
          />
        ) : (
          <h1>Lol</h1>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Sidebar;
