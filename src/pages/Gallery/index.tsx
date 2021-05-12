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
import img1 from "../../assets/images/gallery/img1.jpg"
import img2 from "../../assets/images/gallery/img2.jpg"
import img3 from "../../assets/images/gallery/img3.jpg"
import img4 from "../../assets/images/gallery/img4.jpg"
import img5 from "../../assets/images/gallery/img5.jpg"
import img6 from "../../assets/images/gallery/img6.jpg"
import img7 from "../../assets/images/gallery/img7.jpg"
import img8 from "../../assets/images/gallery/img8.jpg"
import img9 from "../../assets/images/gallery/img9.jpg"


const useStyles = makeStyles({
    text: {
        fontFamily: "Pacifico",
        color: "#ec9f1b",
        fontSize: 20
    }
});

const Gallery = () => {
    const classes = useStyles();
    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
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
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                    <Box p={1}>
                        <img src={img1} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img2} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img3} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img4} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img5} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img6} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img7} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img8} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img9} alt="img3.png" height={300}/>
                    </Box>
                </Box>
            </Hidden>
            <Hidden only={['xs', 'sm']}>
               <Box  display="flex" flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" height="100%">
                   <Box p={1}>
                       <img src={img1} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img2} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img3} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img4} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img5} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img6} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img7} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img8} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img9} alt="img3.png" height={300}/>
                   </Box>
               </Box>
            </Hidden>
        </Box>
        <Box py={1}>
            <SocialIcons/>
        </Box>
    </Box>
}

export default Gallery
