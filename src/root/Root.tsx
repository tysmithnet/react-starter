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
import { ConnectedRouter } from 'connected-react-router';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
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
import { User } from '../user';
import { Action, configureStore, history, State } from '.';
import { connect, Provider } from 'react-redux';
import { createMuiTheme, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import { loginRequestFactory } from '../auth';
/**
 * Displays the copyright for the page
 *
 * @returns
 */
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/tysmithnet/react-starter">
                React Starert
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Builds" />
        </ListItem>
    </div>
);

const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
    </div>
);

interface DashboardProps {
    theme: AppTheme;
    currentUser: User;
    dispatch?: (action: Action) => void;
}

/**
 * The Root of the component tree
 *
 */
function Dashboard(props: DashboardProps) {
    const theme = createMuiTheme(props.theme);
    const useStyles = makeStyles({
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
    });
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = React.useState(true);
    const [loginOpen, setLoginOpen] = React.useState(false);

    /**
     * Handle requests to open the drawer
     *
     */
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    /**
     * Handle requests to close the drawer
     *
     */
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    /**
     *
     *
     */
    const handleToggleLightDarkMode = () => {
        props.dispatch(changeThemeRequestFactory(props.theme, null, true));
    };

    /**
     *
     *
     */
    const handleLoginClose = () => {
        setLoginOpen(false);
    };

    /**
     *
     *
     */
    const handleLoginOpen = () => {
        setLoginOpen(true);
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
                <AccountIcon onClick={handleLoginOpen} />
            </IconButton>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, drawerOpen && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, drawerOpen && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            React Starter
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
                        paper: clsx(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose),
                    }}
                    open={drawerOpen}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                    <Divider />
                    <List>{secondaryListItems}</List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} lg={12}>
                                <ConnectedRouter history={history} />
                            </Grid>
                        </Grid>
                        <Box pt={4}>
                            <Copyright />
                        </Box>
                    </Container>
                </main>
            </div>
            <LoginDialog open={loginOpen} onClose={handleLoginClose} onSubmit={handleLoginSubmit} />
        </ThemeProvider>
    );
}

/**
 *
 *
 * @param {State} state
 * @returns {DashboardProps}
 */
function mapStateToProps(state: State): DashboardProps {
    return {
        currentUser: state.auth.user,
        theme: state.theme,
    };
}

const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
const store = configureStore();
const rootNode = (
    <Provider store={store}>
        <ConnectedDashboard />
    </Provider>
);

ReactDOM.render(rootNode, document.getElementById('root'));
