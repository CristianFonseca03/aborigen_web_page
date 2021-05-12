import React from "react";
//CSS
import "./style.css"
//Libraries
import {Box, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
//Components
import Logo from "../../components/Logo";
import SocialIcons from "../../components/SocialIcons";
import SinglePage from "../../components/single-page"
//Pdf
// @ts-ignore
import pdf from "../../assets/pdf/carta.pdf"

const useStyles = makeStyles({
    text: {
        fontFamily: "Pacifico",
        color: "#ec9f1b",
        fontSize: 20
    }
});

const Menu = () => {
    const classes = useStyles();

    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Box py={1}>
            <Logo/>
        </Box>
        <Box py={1}>
            <Box className="test">
                <Button className={classes.text}>Carta</Button>
            </Box>
        </Box>
        <Box py={1}>
            <SinglePage pdf={pdf}/>
        </Box>
        <Box py={1}>
            <SocialIcons/>
        </Box>
    </Box>
}

export default Menu
