import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AccountIcon from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import { AppTheme } from '../theme';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import BarChartIcon from '@material-ui/icons/BarChart';
import Box from '@material-ui/core/Box';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BuildIcon from '@material-ui/icons/Build';
import Button from '@material-ui/core/Button';
import { changeThemeRequestFactory } from '../theme';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import { Route, Switch, Link as RouteLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import FolderIcon from '@material-ui/icons/FolderOpen';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LayersIcon from '@material-ui/icons/Layers';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { LoginDialog } from '../components/LoginDialog';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Paper from '@material-ui/core/Paper';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Action, history, State, Props } from '../root';
import { User, UserListing } from '../user';
import { connect, Provider } from 'react-redux';
import { createMuiTheme, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import { loginRequestFactory } from '../auth';
import { drawerChangeRequestFactory, loginDialogChangeRequestFactory } from '.';
import { ReportListing } from '../report';
import { ProjectListing } from '../project';
import { RouteData } from '../route';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/tysmithnet/react-starter">
                React Starter
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

interface AppProps extends Props {
    currentUser: User;
    drawerOpen: boolean;
    loginOpen: boolean;
    loginError: string;
    appTheme: AppTheme;
    routes: RouteData[];
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

function AppRaw(props: AppProps) {
    const classes = useStyles();

    const handleDrawerChange = () => {
        props.dispatch(drawerChangeRequestFactory(!props.drawerOpen));
    };

    const handleToggleLightDarkMode = () => {
        props.dispatch(changeThemeRequestFactory(props.appTheme, null, true));
    };

    const handleLoginChange = () => {
        props.dispatch(loginDialogChangeRequestFactory(!props.loginOpen));
    };

    /**
     *
     *
     * @param {string} username
     * @param {string} password
     */
    const handleLoginSubmit = (username: string, password: string) => {
        const request = loginRequestFactory(username, password);
        props.dispatch(request);
    };

    let avatar = null;
    if (props.currentUser) {
        const alt = `${props.currentUser.fname} ${props.currentUser.lname}`;
        avatar = <Avatar alt={alt} src={props.currentUser.image} />;
    } else {
        avatar = (
            <IconButton color="inherit">
                <AccountIcon onClick={handleLoginChange} />
            </IconButton>
        );
    }

    const menuItems = props.routes.map(r => (
        <RouteLink to={r.path}>
            <ListItem button>
                <ListItemIcon>
                    {r.icon}
                </ListItemIcon>
                <ListItemText primary={r.display} />
            </ListItem>
        </RouteLink>
    ));

    const routeSwitchItems = props.routes.map(r => (
        <Route key={r.id} path={r.path} exact={r.exact} component={r.component} />
    ));

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, props.drawerOpen && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerChange}
                        className={clsx(classes.menuButton, props.drawerOpen && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        PipelineKit - Metadata Portal
                    </Typography>
                    <IconButton color="inherit" onClick={handleToggleLightDarkMode}>
                        <Brightness4Icon />
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    {avatar}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !props.drawerOpen && classes.drawerPaperClose),
                }}
                open={props.drawerOpen}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerChange}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{menuItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Switch>
                                {routeSwitchItems}
                            </Switch>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
            <LoginDialog open={props.loginOpen} onClose={handleLoginChange} onSubmit={handleLoginSubmit} />
        </div>
    );
}

function mapStateToProps(state: State): AppProps {
    return {
        appTheme: state?.theme,
        currentUser: state?.auth?.user,
        drawerOpen: state?.app?.ui?.drawerOpen ?? true,
        loginError: state?.app?.ui?.loginError,
        loginOpen: state?.app?.ui?.loginOpen ?? false,
        routes: state?.route?.route ?? [],
    };
}

export const App = connect(mapStateToProps)(AppRaw);
