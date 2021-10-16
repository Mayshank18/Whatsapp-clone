import { Box,makeStyles,InputBase } from "@material-ui/core";
import { EmojiEmotionsOutlined,AttachFile,Mic } from "@material-ui/icons";

const useStyles=makeStyles(theme=>({
    footer:{
        height:55,
        width:'100%',
        background:'#ededed',
        display:'flex',
        alignItems:'center',
        padding:'0 15px',
        '&>*':{
            margin:5,
            color:'#919191'
        }
    },
    clipIcon:{
        transform:'rotate(40deg)'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
      },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: 30,
        paddingBottom: theme.spacing.unit,
        paddingLeft: 20,
        fontSize:14,
        width:'100%',
        height:20
        
    },
    searchBox:{
        backgroundColor:'#FFFFFF',
        borderRadius:18,
        width:'calc(95% - 90px)'
    }
}))

const ChatFooter=({sendText,setValue,value})=>{
    const classes=useStyles();
    return(
        <Box className={classes.footer}>
            <EmojiEmotionsOutlined/>
            <AttachFile className={classes.clipIcon}/>
            <Box className={classes.searchBox}>
                <InputBase 
                placeholder="Type a Message"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onKeyPress={(e)=>sendText(e)}
                onChange={(e)=>setValue(e.target.value)}
                value={value}
                />
            </Box>
            <Mic/>
        </Box>
    )
}
export default ChatFooter;