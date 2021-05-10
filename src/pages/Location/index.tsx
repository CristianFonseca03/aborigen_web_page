import React from "react";
//Libraries
import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, Link} from "@material-ui/core";
//Components
import Logo from "../../components/Logo";
import SocialIcons from "../../components/SocialIcons";
//Image
import location from "../../assets/images/location.png"

const useStyles = makeStyles({
    text: {
        fontFamily: "Pacifico",
        color: "#ec9f1b",
        fontSize: 20
    }
});

const Location = () => {
    const classes = useStyles();
    return <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
        <Box py={1}>
            <Logo/>
        </Box>
        <Box py={1}>
            <Box className="test">
                <Button className={classes.text}>Ubicación</Button>
            </Box>
        </Box>
        <Box py={1}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <h1 className={classes.text}>Calle 3 N 9-11 +57</h1>
                <h1 className={classes.text}>Tibasosa, Colombia</h1>
                <h1 className={classes.text}>3173711252</h1>
                <h1 className={classes.text}>Lun a Dom 6pm - 10pm</h1>
                <Link
                    href="https://www.google.com/maps/place/Cl.+3+%239-11,+Tibasosa,+Boyac%C3%A1/@5.7453207,-73.0032396,18.5z/data=!4m5!3m4!1s0x8e6a4137c6ca060b:0xeba7b850d372472b!8m2!3d5.7453252!4d-73.002965?hl=es">
                    <img src={location} alt="logo1.png" height={350}/>
                </Link>
            </Box>
        </Box>
        <Box py={1}>
            <SocialIcons/>
        </Box>
    </Box>
}

export default Location
