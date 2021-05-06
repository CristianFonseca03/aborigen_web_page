import React from "react";
//Libraries
import {Box} from "@material-ui/core";
import {SocialIcon} from "react-social-icons";

const SocialIcons = () => {
    return <Box display="flex" flexDirection="row">
        <Box px={1}>
            <SocialIcon url="https://www.instagram.com/aborigenresta/"/>
        </Box>
        <Box px={1}>
            <SocialIcon url="https://www.facebook.com/aborigenresta/"/>
        </Box>
        <Box px={1}>
            <SocialIcon url="https://api.whatsapp.com/send?phone=573173711252"/>
        </Box>
    </Box>
}

export default SocialIcons
