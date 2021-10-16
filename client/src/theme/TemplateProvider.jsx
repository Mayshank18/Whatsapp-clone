import React,{createContext} from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";

export const TemplateContext=createContext(null);

const TemplateProvider =({children})=>{

    const theme=createTheme({
        overrides:{
            MuiDrawer:{
                paperAnchorLeft:{
                    height:'95%',
                    left:63.5,
                    top:16,
                    width:'26.1%',
                    boxShadow:'none'
                }
            },
            MuiBackdrop:{
                root:{
                    backgroundColor:'unset'
                }
            }
        }
    })

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>

        </TemplateContext.Provider>
    )
}
export default TemplateProvider;