import React from "react";
//Libraries
import {Box, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
//Images
import logo1 from "../../assets/images/logo_1.png"
import logo2 from "../../assets/images/logo_2.png"

const useStyles = makeStyles({
    img1_sm: {
        height: "100px",
    },
    img2_sm: {
        height: "100px",
    },
    img1_md: {
        height: "220px",
    },
    img2_md: {
        height: "220px",
    },
    img1: {
        height: "250px",
    },
    img2: {
        height: "250px",
    }
});

const Logo = () => {
    const classes = useStyles();
    return <Box display="flex" flexDirection="row" flexWrap="nowrap">
        <Hidden only={['md', 'lg', 'xl']}>
            <img src={logo1} alt="logo1.png" className={classes.img1_sm}/>
            <img src={logo2} alt="logo2.png" className={classes.img2_sm}/>
        </Hidden>
        <Hidden only={['xs', 'sm', 'lg', 'xl']}>
            <img src={logo1} alt="logo1.png" className={classes.img1_md}/>
            <img src={logo2} alt="logo2.png" className={classes.img2_md}/>
        </Hidden>
        <Hidden only={['xs', 'sm', 'md']}>
            <img src={logo1} alt="logo1.png" className={classes.img1}/>
            <img src={logo2} alt="logo2.png" className={classes.img2}/>
        </Hidden>
    </Box>
}

export default Logo
