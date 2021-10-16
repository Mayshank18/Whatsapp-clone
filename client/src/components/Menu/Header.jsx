import { Box,makeStyles } from "@material-ui/core";
import {Chat} from "@material-ui/icons";
import { useContext,useState } from "react";
import { AccountContext } from "../../context/AccountProvider";

//component
import HeaderMenu from "./HeaderMenu";
import  Drawer  from "../drawer/InfoDrawer";

const useStyles=makeStyles({
    header:{
        height:35,
        background:'#ededed',
        padding:'15px 16px 8px 16px',
        display:'flex',
        alignItems:'center',
    },
    avatar:{
        height:40,
        width:40,
        borderRadius:'50%',
    },
    icons:{
        marginLeft:'auto',
        '& > *':{
            margin:2,
            padding:8,
            color:'#919191'
        },
        '& :first-child':{
            fontSize:22,
            marginRight:15,
            marginTop:6,
        }
    }
})

const Header=()=>{
    const classes=useStyles();
    const {account}=useContext(AccountContext);
    const [open,setOpen]=useState(false);

    const toggleDrawer=()=>{
        setOpen(true);
    }

    return(
        <>
            <Box className={classes.header}>
                <img src={account.imageUrl} onClick={()=>toggleDrawer()} alt="display-picture" className={classes.avatar}/>
                <Box className={classes.icons}>
                    <Chat/>
                    <HeaderMenu/>
                </Box>
            </Box>
            <Drawer open={open} setOpen={setOpen}/>
        </>
    )
}
export default Header;