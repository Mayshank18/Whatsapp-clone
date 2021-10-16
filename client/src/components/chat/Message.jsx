import { Box, Typography,makeStyles } from "@material-ui/core";
import { Done, DoneAll} from "@material-ui/icons";
import { useContext, useEffect,useState } from "react";
import { AccountContext } from "../../context/AccountProvider";

const useStyles=makeStyles({
    wrapper:{
        background:'#FFFFFF',
        padding:5,
        maxWidth:'60%',
        display:'flex',
        borderRadius:10,
        width:'fit-content',
        wordBreak:'break-word'
    },
    text:{
        fontSize:15,
        padding:'0 25px 0 5px'
    },
    time:{
        fontSize:10,
        color:'#919191',
        marginTop:'auto',
        wordBreak:'keep-all'
    },
    own:{
        background:'#dcf8c6',
        padding:5,
        maxWidth:'60%',
        display:'flex',
        borderRadius:10,
        width:'fit-content',
        wordBreak:'break-word',
        marginLeft:'auto'
    },
    doneIcon:{
        color:'#919191',
        fontSize:10,
        marginLeft:5,
        marginTop:'auto',
        marginBottom:5
    }
})
const Message=({message,online})=>{
    const classes=useStyles();
    const {account,activeUsers}=useContext(AccountContext);
    const {tick,setTick}=useState(false);
    const formatDate=(date)=>{
        return date < 10?'0'+ date:date;
    }

    return(
        <Box className={account.googleId === message.sender?classes.own:classes.wrapper}>
            <Typography className={classes.text}>{message.text}</Typography>
            <Typography className={classes.time}>{formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}</Typography>
            {account.googleId === message.sender && (tick?<DoneAll className={classes.doneIcon}/>:<Done className={classes.doneIcon}/>)}
        </Box>
    )
}

export default Message;