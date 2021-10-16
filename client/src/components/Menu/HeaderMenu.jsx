import { MoreVert } from "@material-ui/icons"
import { Menu,MenuItem,makeStyles} from "@material-ui/core";
import { useState,useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { clientid } from "../../data";
import { AccountContext } from "../../context/AccountProvider";
import Drawer from "../drawer/InfoDrawer";

const useStyles=makeStyles({
    menuitems:{
        fontSize:14,
        padding:'15px 60px 5px 24px',
        color:'#4a4a4a'
    },
    logout:{
        border:'none!important',
        boxShadow:'none!important',
        '& :*':{
            padding:'0px!important'
        }
    }
})

const HeaderMenu=()=>{
    const[open,setOpen]=useState(false);
    const {setAccount}=useContext(AccountContext);
    const classes=useStyles();
    const [openDrawer,setOpenDrawer]=useState(false);

    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }

    const handleClose=()=>{
        setOpen(false);
    }
    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }
    const onLogoutSuccess=()=>{
        alert("You have been logged out succesfully");
        console.clear();
        setAccount('');
    }
    return(
        <>
        <MoreVert onClick={handleClick}/>
        <Menu
            anchorEl={open}
            keepMounted
            open={Boolean(open)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical:'bottom',
                horizontal:'center'

            }}
            transformOrigin={{
                vertical:'top',
                horizontal:'right'
            }}
        >
            <MenuItem className={classes.menuitems} onClick={()=>{handleClose();toggleDrawer()}}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>
                <GoogleLogout
                    clientId={clientid}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                    className={classes.logout}
                >
                </GoogleLogout>
            </MenuItem>
            
        </Menu>
        <Drawer open={openDrawer} setOpen={setOpenDrawer}/>
      </>
    )
}
export default HeaderMenu;