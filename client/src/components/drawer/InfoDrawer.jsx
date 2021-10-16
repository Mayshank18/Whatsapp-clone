import {Drawer} from '@material-ui/core';
import { Box,Typography,makeStyles} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

//components
import Profile from './Profile';

const useStyles=makeStyles({
    header:{
        background:'#00bfa5',
        height:97,
        color:'#fff',
        display:'flex',
        '& > *':{
            marginTop:'auto',
            padding:15,
            fontWeight:600
        }

    },
    component:{
        background:'#ededed',
        height:'84%'
    }
})

const InfoDrawer=({open,setOpen})=>{
    const classes=useStyles();
    return (
        <Drawer open={open} >
            <Box className={classes.header}>
                <ArrowBack onClick={()=>{setOpen(false)}}/>
                <Typography>Profile</Typography>
            </Box>
            <Box className={classes.component}>
                <Profile />
            </Box>

        </Drawer>
    )
}
export default InfoDrawer;