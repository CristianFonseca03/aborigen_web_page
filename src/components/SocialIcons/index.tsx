import React from "react";
//Libraries
import {Box, Link} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
//Images
import fb from "../../assets/images/social/facebook.png"
import ig from "../../assets/images/social/instagram.png"
import ws from "../../assets/images/social/whatsapp.png"

const useStyles = makeStyles({
    social_icon: {
        height: "40px",
    },
});

const SocialIcons = () => {
    const classes = useStyles();
    return <Box display="flex" flexDirection="row">
        <Box px={1}>
            <Link href="https://www.instagram.com/aborigenresta/">
                <img src={ig} alt="logo.png" className={classes.social_icon}/>
            </Link>
        </Box>
        <Box px={1}>
            <Link href="https://www.facebook.com/aborigenresta/">
                <img src={fb} alt="logo.png" className={classes.social_icon}/>
            </Link>
        </Box>
        <Box px={1}>
            <Link href="https://api.whatsapp.com/send?phone=573173711252">
                <img src={ws} alt="logo.png" className={classes.social_icon}/>
            </Link>
        </Box>
    </Box>
}

export default SocialIcons
