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
import img1 from "../../assets/images/gallery/1.jpeg"
import img2 from "../../assets/images/gallery/2.jpeg"
import img3 from "../../assets/images/gallery/3.jpeg"
import img4 from "../../assets/images/gallery/4.jpeg"
import img5 from "../../assets/images/gallery/5.jpeg"
import img6 from "../../assets/images/gallery/6.jpeg"
import img7 from "../../assets/images/gallery/7.jpeg"
import img8 from "../../assets/images/gallery/8.jpeg"
import img9 from "../../assets/images/gallery/9.jpeg"
import img10 from "../../assets/images/gallery/10.jpeg"
import img11 from "../../assets/images/gallery/11.jpeg"
import img12 from "../../assets/images/gallery/12.jpeg"
import img13 from "../../assets/images/gallery/13.jpeg"
import img14 from "../../assets/images/gallery/14.jpeg"
import img15 from "../../assets/images/gallery/15.jpeg"
import img16 from "../../assets/images/gallery/16.jpeg"
import img17 from "../../assets/images/gallery/17.jpeg"
import img18 from "../../assets/images/gallery/18.jpeg"
import img19 from "../../assets/images/gallery/19.jpeg"
import img20 from "../../assets/images/gallery/20.jpeg"
import img21 from "../../assets/images/gallery/21.jpeg"
import img22 from "../../assets/images/gallery/22.jpeg"
import img23 from "../../assets/images/gallery/23.jpeg"
import img24 from "../../assets/images/gallery/24.jpeg"
import img25 from "../../assets/images/gallery/25.jpeg"
import img26 from "../../assets/images/gallery/26.jpeg"
import img27 from "../../assets/images/gallery/27.jpeg"
import img28 from "../../assets/images/gallery/28.jpeg"
import img29 from "../../assets/images/gallery/29.jpeg"
import img30 from "../../assets/images/gallery/30.jpeg"
import img31 from "../../assets/images/gallery/31.jpeg"
import img32 from "../../assets/images/gallery/32.jpeg"
import img33 from "../../assets/images/gallery/33.jpeg"
import img34 from "../../assets/images/gallery/34.jpeg"
import img35 from "../../assets/images/gallery/35.jpeg"
import img36 from "../../assets/images/gallery/36.jpeg"
import img37 from "../../assets/images/gallery/37.jpeg"
import img38 from "../../assets/images/gallery/38.jpeg"
import img39 from "../../assets/images/gallery/39.jpeg"
import img40 from "../../assets/images/gallery/40.jpeg"
import img41 from "../../assets/images/gallery/41.jpeg"
import img42 from "../../assets/images/gallery/42.jpeg"
import img43 from "../../assets/images/gallery/43.jpeg"
import img44 from "../../assets/images/gallery/44.jpeg"
import img45 from "../../assets/images/gallery/45.jpeg"
import img46 from "../../assets/images/gallery/46.jpeg"
import img47 from "../../assets/images/gallery/47.jpeg"
import img48 from "../../assets/images/gallery/48.jpeg"
import img49 from "../../assets/images/gallery/49.jpeg"
import img50 from "../../assets/images/gallery/50.jpeg"
import img51 from "../../assets/images/gallery/51.jpeg"
import img52 from "../../assets/images/gallery/52.jpeg"
import img53 from "../../assets/images/gallery/53.jpeg"
import img54 from "../../assets/images/gallery/54.jpeg"
import img55 from "../../assets/images/gallery/55.jpeg"
import img56 from "../../assets/images/gallery/56.jpeg"
import img57 from "../../assets/images/gallery/57.jpeg"
import img58 from "../../assets/images/gallery/58.jpeg"


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
                    <Box p={1}>
                        <img src={img10} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img11} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img12} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img13} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img14} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img15} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img16} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img17} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img18} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img19} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img20} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img21} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img22} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img23} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img24} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img25} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img26} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img27} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img28} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img29} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img30} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img31} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img32} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img33} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img34} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img35} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img36} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img37} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img38} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img39} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img40} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img41} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img42} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img43} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img44} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img45} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img46} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img47} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img48} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img49} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img50} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img51} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img52} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img53} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img54} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img55} alt="img2.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img56} alt="img3.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img57} alt="img1.png" height={300}/>
                    </Box>
                    <Box p={1}>
                        <img src={img58} alt="img2.png" height={300}/>
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
                   <Box p={1}>
                       <img src={img10} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img11} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img12} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img13} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img14} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img15} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img16} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img17} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img18} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img19} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img20} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img21} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img22} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img23} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img24} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img25} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img26} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img27} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img28} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img29} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img30} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img31} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img32} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img33} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img34} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img35} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img36} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img37} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img38} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img39} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img40} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img41} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img42} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img43} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img44} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img45} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img46} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img47} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img48} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img49} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img50} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img51} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img52} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img53} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img54} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img55} alt="img2.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img56} alt="img3.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img57} alt="img1.png" height={300}/>
                   </Box>
                   <Box p={1}>
                       <img src={img58} alt="img2.png" height={300}/>
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
