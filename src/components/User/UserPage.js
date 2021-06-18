import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/EC18A007-logo.png';
import { BrowserRouter , Link, Route, NavLink } from 'react-router-dom';
import Info from './Info';
import ServicePack from './ServicePack';

const useStyles = makeStyles((theme) => ({
    blue:{
        width:'200px',
        background: 'linear-gradient(169.93deg, rgba(27, 225, 225, 0.45) 1.86%, rgba(15, 56, 163, 0.23) 96.42%)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',        
    },
    logo:{
        width:'100px',
        height: '100px',
        border: '1px solid black',
        margin: '2rem',
    },
    pad:{
        padding: '1rem',
        minHeight: '50rem',
        background: '#E5E5E5'
    },
    username:{
        fontFamily: 'Roboto',
        textAlign: 'center',
    }
  }));

const UserPage = () =>{
    const classes = useStyles();
    const [user, setUser] = useState('User');

    return (
        <BrowserRouter>
            <Grid container justify="center" className={classes.pad}>
                <Grid item lg={2} className={classes.blue}>          
                    <div>
                        <Avatar alt="FastHub" src={logo} className={classes.logo} />
                        <h3 className={classes.username}>{user}</h3>
                    </div>   
                    <List >
                        <ListItem button>
                        <ListItemIcon>
                            <CloseIcon />
                        </ListItemIcon>
                            <NavLink activeClassName="nav-active" to={'/user/info'}>Thông tin</NavLink>
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <CloseIcon />
                        </ListItemIcon>
                            <NavLink activeClassName="nav-active" to={'/user/order-history'}>Lịch sử giao hàng</NavLink>
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <CloseIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lịch sử giao dịch" />
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <CloseIcon />
                        </ListItemIcon>
                            <NavLink activeClassName="nav-active" to={'/user/servicepack'}>Gói dịch vụ</NavLink>
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <CloseIcon />
                        </ListItemIcon>
                            <NavLink activeClassName="nav-active" to={'/user/order'}>Đơn hàng</NavLink>
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <CloseIcon />
                        </ListItemIcon>
                            <NavLink activeClassName="nav-active" to={'/user/order-delivery'}>Đặt vận chuyển</NavLink>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item lg={6} >
                    <Route path="/user/info" component={Info}/>
                    <Route path="/user/servicepack" component={ServicePack}/>
                </Grid>
            </Grid>    
            
        </BrowserRouter>
            
    )
}

export default UserPage