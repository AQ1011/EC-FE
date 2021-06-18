import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import clsx from  'clsx';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/EC18A007-logo.png';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '90%',
      height: '90%',
      overflow: 'hidden',
      background: 'rgba(255, 255, 255)',
      borderRadius: 20,
      display: 'flex'
    },
    blue:{
        width:'20%',
        height:'100%',
        background: 'linear-gradient(169.93deg, rgba(27, 225, 225, 0.45) 1.86%, rgba(15, 56, 163, 0.23) 96.42%)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',        
    },
    logo:{
        width:'100px',
        height: '100px',
    }
  }));

const User = () =>{
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.blue}>             
                <Avatar alt="FastHub" src={logo} className={classes.logo}/>
                <List >
                    <ListItem button>
                    <ListItemIcon>
                        <CloseIcon />
                    </ListItemIcon>
                    <ListItemText primary="Thông tin" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <CloseIcon />
                    </ListItemIcon>
                    <ListItemText primary="Lịch sử giao hàng" />
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
                    <ListItemText primary="Gói dịch vụ" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <CloseIcon />
                    </ListItemIcon>
                    <ListItemText primary="Đơn hàng" />
                    </ListItem>
                </List>
            </div>
            <div>          
            
            <IconButton onClick={handleClose}><CloseIcon color='primary'/></IconButton>   
            </div>
        </div>        
    );

    return <div>
        <button type="button" onClick={handleOpen}>
            Open Modal
        </button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
        </div>
}


export default User