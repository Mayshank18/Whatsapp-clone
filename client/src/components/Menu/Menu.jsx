import Header from "./Header";
import Search from "./SearchBar";
import Conversation from "./Conversations";
import { useState } from "react";

const Menu=()=>{
    const [text,setText]=useState('');
    return(
        <>
            <Header/>
            <Search setText={setText}/>
            <Conversation text={text}/>
        </>
    )
}
export default Menu;