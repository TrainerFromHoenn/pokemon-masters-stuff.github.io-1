import React from 'react';
import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { DarkModeToggleMobile } from '../DarkModeToggle';
import AnnouncementModal from '../AnnouncementModal/Mobile';
import styles from './styles';
import { useSelector } from 'react-redux';

function MainAppbar(props) {
  const { classes, onOpenNavHandler, data, onAnnouncementClickHandler } = props;
  const darkMode = useSelector(state => state.darkMode.mode);

  const handleOnOpenNav = () =>
    typeof onOpenNavHandler === 'function' ? onOpenNavHandler() : null;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleOnOpenNav}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Sync Grid Helper
        </Typography>
        <AnnouncementModal handleClick={onAnnouncementClickHandler} />
        <DarkModeToggleMobile />
      </Toolbar>

      <Toolbar className={classes.subToolbar}>
        <Typography
          variant="body1"
          className={classes.title}
          color={darkMode ? 'textPrimary' : 'default'}
        >
          Remaining Energy: {data.energy}
        </Typography>
        <Typography
          variant="body1"
          className={classes.title}
          color={darkMode ? 'textPrimary' : 'default'}
        >
          Orbs Spent: {Boolean(data && data.orbs > -1) && data.orbs}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(MainAppbar);
