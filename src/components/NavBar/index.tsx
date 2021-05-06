import React from "react";
//Css
import "./style.css"
//Libraries
import {Box, Button, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    text: {
        fontFamily: "Pacifico",
        color: "#ec9f1b",
        fontSize: 20
    }
});

const NavBar = () => {
    const classes = useStyles();
    const history = useHistory();

    function gotoGallery() {
        history.push("/fotos");
    }

    function gotoMenu() {
        history.push("/carta");
    }

    function gotoLocation() {
        history.push("/ubicacion");
    }

    function gotoWssp() {
        window.location.assign('https://api.whatsapp.com/send?phone=573173711252');
    }


    return <>
        <Hidden only={['md', 'lg', 'xl']}>
            <Box className="test" display="flex" flexDirection="column">
                <Button className={classes.text} onClick={gotoGallery}>Fotos</Button>
                <Button className={classes.text} onClick={gotoMenu}>Carta</Button>
                <Button className={classes.text} onClick={gotoLocation}>Ubicación</Button>
                <Button className={classes.text} onClick={gotoWssp}>Domicilios</Button>
            </Box>
        </Hidden>
        <Hidden only={['xs', 'sm']}>
            <Box className="test">
                <Button className={classes.text} onClick={gotoGallery}>Fotos</Button>
                <Button className={classes.text} onClick={gotoMenu}>Carta</Button>
                <Button className={classes.text} onClick={gotoLocation}>Ubicación</Button>
                <Button className={classes.text} onClick={gotoWssp}>Domicilios</Button>
            </Box>
        </Hidden>
    </>
}

export default NavBar
