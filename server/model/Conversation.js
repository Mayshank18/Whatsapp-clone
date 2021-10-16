import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
    members:{
        type:Array
    },
    message:{
        type:String
    }},
    {
        timestamps:true
    }
)
export const conversation=mongoose.model('conversation',ConversationSchema);