import { useContext } from "react";
import { Dialog , withStyles,Box,Typography,makeStyles,List,ListItem, Hidden} from "@material-ui/core";
import {GoogleLogin} from "react-google-login"
import { AccountContext } from "../../context/AccountProvider";
import { clientid } from "../../data";
import { addUser } from "../../service/api";
const useStyles=makeStyles({
    component:{
        display:'flex'
    },
    leftComponent:{
        padding: '56px 0px 56px 56px'
    },
    qrCode:{
        height: 264,
        width: 264,
        padding:'50px 0px 0px 50px' 
    },
    title:{
        fontSize: 26,
        marginBottom:25,
        color:'#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:300
    },
    list:{
        '& > *':{
            fontSize:18,
            padding:0,
            marginTop:15,
            lineHeight:'28px',
            color:'#4a4a4a'
        }
    }
})

const styles={
    dialogPaper : {
        height:'95%',
        width:'64%',
        marginTop:'13%',
        boxShadow:'none',
        borderRadius:0,
        maxHeight:'100%',
        maxWidth:'100%',
        overflow:'hidden'
    }
}
const Login=({classes})=>{
    const classname=useStyles();
    const qurl='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const {account, setAccount}=useContext(AccountContext);

    const onLoginSuccess= async (res)=>{
        console.log("Login Successfull",res.profileObj);
        setAccount(res.profileObj);
        await addUser(res.profileObj);
    }
    const onLoginFailure=(res)=>{
        console.log("Login Failed")
    }
    return(
        <Dialog
            open={true}
            classes={{paper:classes.dialogPaper}}
            BackdropProps={{style:{backgroundColor:"unset"}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open Whatsapp on your phone.</ListItem>
                        <ListItem>2. Tap Menu or Settings to select linked devices.</ListItem>
                        <ListItem>3. Point your phone to the screen to capture the code.</ListItem>
                    </List>
                </Box>
                <Box style={{position:"relative"}}>
                    <img src={qurl} alt='qr' className={classname.qrCode}/>
                    <Box style={{position:"absolute",left:'50%',top:'50%'}}>
                        <GoogleLogin
                            clientId={clientid}
                            buttonText=""
                            isSignedIn={true}
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}
export default withStyles(styles)(Login);