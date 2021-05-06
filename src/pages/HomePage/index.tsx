import React from "react";
//CSS
import "./style.css"
//Libraries
import {Box} from "@material-ui/core";
//Components
import Logo from "../../components/Logo";
import NavBar from "../../components/NavBar";
import SocialIcons from "../../components/SocialIcons";

const HomePage = () => {
    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
        <Box py={1}>
            <Logo/>
        </Box>
        <Box py={1}>
            <NavBar/>
        </Box>
        <Box py={1}>
            <SocialIcons/>
        </Box>
    </Box>
}

export default HomePage
