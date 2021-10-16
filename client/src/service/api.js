import axios from 'axios';

const URL="http://localhost:8000";

export const addUser=async (data)=>{
    try{
        return await axios.post(`${URL}/add`,data)
    }
    catch(error){
        console.log("Error while calling addUser Api",error);
    }
}
export const getUsers=async ()=>{
    try{
        let response=await axios.get(`${URL}/users`);
        return response.data;
    }
    catch(error){
        console.log("Error while calling getUser Api",error);
    }
}
export const setConversations= async(data)=>{
    try{
        await axios.post(`${URL}/conversation/add`,data);
    }
    catch(error){
        console.log("Error while calling setConversation Api",error);
    }
}

export const getConversation=async(data)=>{
    try{
        let response=await axios.post(`${URL}/conversation/get`,data);
        return response.data
    }
    catch(err){
        console.log("Error while calling getConversation Api",err);
    }
}   

export const newMessage=async(data)=>{
    try{
        await axios.post(`${URL}/message/add`,data);
    }
    catch(err){
        console.log("Error while calling newMessage Api",err);
    }
}
export const getMessage=async(id)=>{
    try{
        return await axios.get(`${URL}/message/get/${id}`);
    }
    catch(err){
        console.log("Error while calling getMessage Api",err);
    }
}