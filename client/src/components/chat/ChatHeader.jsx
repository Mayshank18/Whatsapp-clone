import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { Box,Typography,makeStyles } from "@material-ui/core";
import { Search,MoreVert } from "@material-ui/icons";
import { AccountContext } from "../../context/AccountProvider";


const useStyles=makeStyles({
    component:{
        display:'flex',
        background:'#ededed',
        height:35,
        padding:'15px 16px 8px 16px',
        alignItems:'center',
    },
    profilePic:{
        width:37,
        height:37,
        borderRadius:'50%',
        padding:'0 2px'
        
    },
    profileName:{
        marginLeft:10
    },
    profileStatus:{
        fontSize:12,
        marginLeft:10,
        color:'rgb(0,0,0,0.6)',

    },
    rightContainer:{
        marginLeft:'auto',
        '&>*':{
            padding:8,
            fontSize:22,
            color:'#919191'
        }
    }
})

const ChatHeader=()=>{
    const classes=useStyles();
    const {person}=useContext(UserContext);
    const {activeUsers}=useContext(AccountContext);

    return(
        <Box className={classes.component}>
            <img src={person.imageUrl} alt='display-profilepic' className={classes.profilePic}/>
            <Box>
                <Typography className={classes.profileName}>{person.name}</Typography>
                <Typography className={classes.profileStatus}>
                    {
                        activeUsers?.find(user=>user.userId === person.googleId)? 'Online':'Offline'
                    }
                </Typography>
            </Box>
            <Box className={classes.rightContainer}>
                <Search/>
                <MoreVert/>
            </Box>
        </Box>
    )
}
export default ChatHeader;