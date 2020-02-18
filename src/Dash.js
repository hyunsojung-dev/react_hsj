import React, { useState } from 'react';
// react version 4 이기 때문에 react-router가 아니라 react-router-dom을 사용해야함 (버전마다 상이하게 다름)
// 리액트 v3 정적라우팅 , v4 동적 라우팅
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { signIn } from './loginComponents/auth';
import AuthRoute from './loginComponents/AuthRoute';
import LoginForm from './loginComponents/LoginForm';
import LogoutButton from './loginComponents/logoutForm';
import Problem from './containers/Problem';
import Homeview from './containers/First-Home';
import YearComment from './containers/evaluation'
// list_item 설정
// @material-ui 설정
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Link2 from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';

// list ui를 위한 패키지 설정
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AnnouncementRoundedIcon from '@material-ui/icons/AnnouncementRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';

// 대쉬보드 메인 색 변경
// import green from '@material-ui/core/colors/green';
// const green_primary = green[800];
import blueGrey from '@material-ui/core/colors/blueGrey';
const bluegrey_primary = blueGrey[900];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link2 color="inherit" href="https://hyunsojung-dev.github.io/react_hsj/">
        정보처리기사
      </Link2>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
//const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  AppBar: {
    background: bluegrey_primary,
  },
  Box: {
    marginBottom: 10,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
 // const [open, setOpen] = React.useState(true);
  // user 
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = ({ email, name }) => setUser(signIn({ email, name }));
  const logout = () => setUser(null);
  // drawer 기능
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Divider />
          <div>
              <Link to="/view" >
              <ListItem button>
                <ListItemIcon>
                  <AnnouncementRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="문제 풀기" /> 
              </ListItem> 
              </Link>    
              <Link to="/Problem" >
              <ListItem button>
                <ListItemIcon>
                  <CreateRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="문제 요청" />
              </ListItem>
              </Link>
              <Link to="/comment" >
              <ListItem button>
                <ListItemIcon>
                  <ImportContactsRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="년도별 리스트" />
              </ListItem>
              </Link> 
          </div>
        <Divider />
    </div>
  );
 
  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar >
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)} >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            React Certificate
          </Typography>
          <div style={{ float: "right", marginRight: 5}}>{authenticated ? (
                <LogoutButton logout={logout} />              
                ) : (
                <Link to="/login">
                    <div style={{fontSize: 16}}>Login</div>
                </Link>
                )}</div>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        open={state.left} onClose={toggleDrawer('left', false)}
      >
        {sideList('left')}
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="user information" />
        </ListItem>
      </Drawer>
      <main >
        <div />
        {/* <Container maxWidth="lg" className={classes.container}> */}
         <Switch>
            <Route exact path="/" component={Homeview}/>
            <Route
              path="/login"
              render={props => (
              <LoginForm authenticated={authenticated} login={login} {...props} />
              )} />
            <AuthRoute
              authenticated={authenticated}
              path="/Problem"
              render={props => <Problem user={user} {...props} /> }  />           
            <AuthRoute
              authenticated={authenticated}
              path="/comment"
              render={props => <YearComment user={user} {...props} />} />               
         </Switch>
          <Box pt={6}>
            <Copyright />
          </Box>
        {/* </Container>  */}
      </main>
    </div>
    </Router>
   
  );
}