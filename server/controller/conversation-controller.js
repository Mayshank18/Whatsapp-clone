import { conversation } from "../model/Conversation.js";

export const newConversation=async(req,res)=>{
    let senderId=req.body.senderId;
    let receiverId=req.body.receiverId;
    try{
        const exist= await conversation.findOne({members: { $all: [senderId,receiverId]}});

        if(exist){
            res.status(200).json('ConversationId already exists');
            return;
        }

        const newConvo= new conversation({
            members:[senderId,receiverId]
        })    
        await newConvo.save(); 
        res.status(200).json('new conversation added successfully');   

    }catch(err){
        res.status(500).json(err);
    }
}

export const getConversation=async(req,res)=>{
    try{
        const converse=await conversation.findOne({members:{$all: [req.body.sender,req.body.receiver]}});
        res.status(200).json(converse);
    }
    catch(err){
        res.status(500).json(err);
    }
}