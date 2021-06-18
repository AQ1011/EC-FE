import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import key from './key.png';
import user from './user.png';
import ins from './ins.png';
import face from './face.png';

import {useState} from 'react';
import axios from 'axios';
import AuthService from "../../services/auth.service";

const useStyles = makeStyles((theme) => ({
    img: {
        width: '897px',
        height: '732px',
        left: '118px',
        top: '209px'
    },
    centerAlign: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        width: '588px',
        left: '1000px',
        top: '345px',
        height: '90px'
    },

    flexEndAlight: {
        position: 'absolute',
        justifyContent: 'flex-end',
        left: '1120px',
        paddingTop: '10px',
        bottom: '430px'

    },

    editText: {
        width: '588px',
        height: '50px',
        left: '30px',
        top: '50px',
    },
    textLogIn: {
        position: 'static',
        width: '242px',
        height: '78px',
        left: '10px',
        top: '10px',
        fontFamily: 'Montserrat Alternates',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '78px',
        alignItems: 'center',
        fontSize: '64px',
        margin: ' 0 10px',
        color: '#CE5D6D'
    },
    inputItem:{
        width: '350px',
        height: '45px',
        left: '800px',
        top: '90px',
        backGround: '#fff',
        border: 'none',
        fontSize: '25px',
        outlineStyle: 'none',
        borderRadius: '10px'
    },

    btnLogin: {
        background: 'linear-gradient(89.94deg, #F2684A -16.83%, rgba(240, 233, 69, 0.75) 99.89%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 25,
        textTransform: 'none',
        color: 'white',
        padding: '16px 30px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '50%',
        width: '160px',
        height: '40px'
    },

    Frame: {
        width: '734px',
        height: '895px',
        left: '1147px',
        top: '140px'
    },
    TypoText: {
        position: 'absolute',
        right:'33vh',
        paddingBottom: '5vh'
    },
    rightAlign: {
        position: 'relative',
        left: '29vh',
        paddingTop: '1px',
        paddingBottom: '10px'
    },
    Key: {
        width: '35px',
        height: '35px',
        left: '2px',
        top: '7px',
        position: 'relative',
        
    },
    User: {
        width: '35px',
        height: '35px',
        left: '2px',
        top: '7px',
        position: 'relative',
    },
    inputItem: {
        width: '310px',
        height: '45px',
        left: '800px',
        top: '90px',
        backGround: '#fff',
        border: 'none',
        fontSize: '25px',
        outlineStyle: 'none',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px'
    },
    iconUser: {
        width: '40px',
        height: '45px',
        background: '#fff',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
    },
    iconKey: {
        width: '40px',
        height: '45px',
        background: '#fff',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
    },
    Face: {
        width: '61px',
        height: '41px',
        left: '-9px',
        top: '7px',
        position: 'relative',
        padding: '0 10px 0 10px'
    },
    Ins: {
        width: '61px',
        height: '41px',
        left: '-9px',
        top: '7px',
        position: 'relative',
        padding: '0 18px 0 0'
    }
    
}))
const LoginForm = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const forget = () => {
        alert("quen mat khau");
    }

    function login() {
        // axios
        //     .post('http://localhost:5000/auth/login',
        //     {email: email, password: password})
        //     .then((res) => {
        //         alert(res.data.message)
        //         console.log(res.data);
        //     })
        //     .catch(err =>{
        //         console.log(err);
        //     })
        AuthService.login(email, password).then(
            () => {
            //   window.location.reload();
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
                console.log("shit" + error.message)
                alert(error.response.message)
            })
    }

    return (
        <Grid container style={{paddingTop:'2vh', maxWidth:'1080px'}} >
            <Grid item lg={12} className={classes.centerAlign} height=''>
                <Typography className={classes.textLogIn} >
                    LOG IN
                </Typography>
            </Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                <div className={classes.iconUser}>
                    <img src={user} className={classes.User}/>
                </div>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className={classes.inputItem}
                />
            </Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                <div className={classes.iconKey}>
                    <img src={key} className={classes.Key}/>
                </div>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className={classes.inputItem}
                    
                /> 
                
            </Grid>
            <Grid item lg={12} >
                <Container maxWidth='sm'>
                    <Typography variant="body2" component="h2" color='secondary' className={classes.TypoText} >
                        <i style={{cursor:'pointer'}} onClick={forget}>Forget password</i>
                    </Typography>
                </Container>
            </Grid>
            <Grid item lg={12} className={classes.rightAlign}>
                <FormControl component="fieldset" >
                <FormGroup aria-label="position" row>
                    <FormControlLabel style={{ fontFamily: 'Montserrat' }}
                        value='end'
                        control={<Checkbox color="primary" />}
                        label="show password "
                        labelPlacement="end"
                    />
                </FormGroup>
                </FormControl>
            </Grid>
            
            <Grid item lg={12} className={classes.centerAlign}>
                <Button onClick={login} className={classes.btnLogin}>Log In</Button>
            </Grid>
            <Grid item lg={12} className={classes.centerAlign}>
                <img src={face} className={classes.Face}/>
                <img src={ins} className={classes.Ins} />
            </Grid>
        </Grid>
    )
}
export default LoginForm
