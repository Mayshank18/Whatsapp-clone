import Mongoose from 'mongoose';

const Connection= async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@chatapp.ibz5n.mongodb.net/WHATSAPPCLONE?retryWrites=true&w=majority`;
    try{
        await Mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('DataBase Connected Successfully');
    } catch(error){
        console.log('Error while connecting to mongodb',error);
    }

}
export default Connection;