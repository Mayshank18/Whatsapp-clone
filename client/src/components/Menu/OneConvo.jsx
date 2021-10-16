import { Box,Typography,makeStyles } from "@material-ui/core";
import { useContext,useEffect,useState} from "react";
import { AccountContext} from '../../context/AccountProvider';
import { getConversation, setConversations } from "../../service/api";
import { UserContext } from "../../context/UserProvider";


const useStyles=makeStyles({
    displayPicture:{
        width:40,
        height:40,
        borderRadius:'50%',
        padding:'0 14px',
    },
    inactive:{
        padding:'13px 0',
        display:'flex',
        height:40,
        backgroundColor:'#FFFFFF',
        cursor:'pointer'
    },
    active:{
        padding:'13px 0',
        display:'flex',
        height:40,
        backgroundColor:'#ededed',
        cursor:'pointer'
    },
    timestamp:{
        fontSize:12,
        marginLeft:'auto',
        marginRight: 20,
        color:'#00000099'
    },
    text:{
        color:'rgba(0,0,0,0.6)',
        fontSize: 14
    }
})
const OneConvo = ({user,users}) => {
    const classes=useStyles();
    const {account,newMessageFlag}=useContext(AccountContext);
    const {person,setPerson}=useContext(UserContext);
    const [colour,setColour]=useState('#FFFFFF');
    const [message,setMessage]=useState({});

    useEffect(()=>{
        const getConversationMessage=async()=>{

            const data=await getConversation({sender: account.googleId, receiver:user.googleId});
            setMessage({text: data.message, timestamp: data.updatedAt});
        }
        getConversationMessage();
    },[newMessageFlag])


    const setUser=async(user)=>{
        setPerson(user);
        await setConversations({senderId: account.googleId, receiverId: user.googleId})
    }

    const formatDate=(date)=>{
        return date < 10?'0'+ date:date;
    }


    return(
        <Box className={person.googleId===user.googleId?classes.active:classes.inactive}  onClick={()=>setUser(user)}>
            <Box>
                <img src={user.imageUrl} alt="display-picture" className={classes.displayPicture}/>
            </Box>
            <Box style={{width:'100%'}}>
                <Box style={{display:'flex'}}>
                    <Typography>{user.name}</Typography>
                    {
                        message.text &&
                        <Typography className={classes.timestamp}>
                            {formatDate(new Date(message.timestamp).getHours())}:{formatDate(new Date(message.timestamp).getMinutes())}
                        </Typography>
                    }
                </Box>
                <Box>
                    <Typography className={classes.text}>{message.text}</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default OneConvo;
