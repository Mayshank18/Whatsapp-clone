import { Box } from '@material-ui/core'
import { useState,useEffect,useContext } from 'react'

import { UserContext } from '../../context/UserProvider'
import {AccountContext} from '../../context/AccountProvider'
import { getConversation } from '../../service/api'

//component
import ChatHeader from './ChatHeader'
import Messages from './Messages'

export const Chat=()=>{

    const {person}=useContext(UserContext);
    const {account}=useContext(AccountContext);

    const [conversation,setConversation]=useState({});

    useEffect(()=>{

        const getConversationDetails=async()=>{
            let data=await getConversation({sender:account.googleId,receiver:person.googleId})
            setConversation(data)
        }
        getConversationDetails();
    },[person.googleId])
    return (
        <Box>
            <ChatHeader/>
            <Messages conversation={conversation} person={person}/>
        </Box>
    )
}
