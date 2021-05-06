import React from "react";
//CSS
import "./style.css"
//Libraries
import {Box, Button, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
//Components
import Logo from "../../components/Logo";
import SocialIcons from "../../components/SocialIcons";
//Images
import img1 from "../../assets/images/gallery/1.jpg"
import img2 from "../../assets/images/gallery/2.jpg"
import img3 from "../../assets/images/gallery/3.jpg"


const useStyles = makeStyles({
    text: {
        fontFamily: "Pacifico",
        color: "#ec9f1b",
        fontSize: 20
    }
});

const Gallery = () => {
    const classes = useStyles();
    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
        <Box py={1}>
            <Logo/>
        </Box>
        <Box py={1}>
            <Box className="test">
                <Button className={classes.text}>Fotos</Button>
            </Box>
        </Box>
        <Box py={1}>
            <Hidden only={['md', 'lg', 'xl']}>
                <Box display="flex" flexDirection="column">
                    <img src={img1} alt="logo1.png" height={350}/>
                    <img src={img2} alt="logo2.png" height={350}/>
                    <img src={img3} alt="logo2.png" height={350}/>
                </Box>
            </Hidden>
            <Hidden only={['xs', 'sm']}>
                <img src={img1} alt="logo1.png" height={350}/>
                <img src={img2} alt="logo2.png" height={350}/>
                <img src={img3} alt="logo2.png" height={350}/>
            </Hidden>
        </Box>
        <Box py={1}>
            <SocialIcons/>
        </Box>
    </Box>
}

export default Gallery
