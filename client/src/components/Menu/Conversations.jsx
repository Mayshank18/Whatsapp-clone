import { getUsers } from "../../service/api";
import { useEffect,useState,useContext } from "react";
import {Box,makeStyles} from '@material-ui/core';

//Components
import OneConvo from "./OneConvo";
import {AccountContext} from '../../context/AccountProvider';

const useStyles=makeStyles({
    component:{
        height:'79vh',
        overflow:'overlay',
        cursor:'pointer'
    }
})

const Conversation=({text})=>{

    const [users,setUsers]=useState([]);
    const {account, socket, setActiveUsers} = useContext(AccountContext);
    useEffect(()=>{
        const fetchdata=async ()=>{
            const data=await getUsers();
            const filteredData=data.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchdata();
    },[text]);

    useEffect(()=>{
        socket.current.emit('addUser',account.googleId);
        socket.current.on('getUsers',users=>{
            setActiveUsers(users);
        })
    },[account]);
    
    const classes=useStyles();
    return(
        <Box className={classes.component}>
            {
            users.map(user=>(
                user.googleId!==account.googleId &&
                <OneConvo user={user} users={users}/>
            ))
            }
        </Box>
    )
}
export default Conversation;