import { Box,makeStyles,Typography} from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const useStyles=makeStyles({
    imageContainer:{
        display:'flex',
        justifyContent:'center'
    },
    avatar:{
        height:140,
        width:140,
        borderRadius:'50%',
        padding:'20px 0'
    },
    nameContainer:{
        background:'#FFFFFF',
        padding:'12px 30px 2px',
        boxShadow:'0 1px 3px rgba(0,0,0,0.08)',
        '& :first-child':{
            fontSize:15,
            color:'#009688'
        },
        '& :last-child':{
            color:'#4a4a4a',
            padding:'14px 0'
        }
    },
    description:{
        padding:'10px 20px 28px 30px',
        '& >*':{
            fontSize:12,
            color:'rgba(0,0,0,0.45)'
        }
    }
})

const Profile=()=>{
    const classes=useStyles();
    const {account}=useContext(AccountContext);

    return (
        <>
            <Box className={classes.imageContainer}>
                <img src={account.imageUrl} alt="display-picture" className={classes.avatar} />
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </Box>
            <Box className={classes.description}>
                <Typography>This is not your username or pin.This name will be visible to your whatsapp contacts.</Typography>
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>About</Typography>
                <Typography>You suffer your own intelligence!!</Typography>
            </Box>
            <Box></Box>
        </>
    )
}
export default  Profile;