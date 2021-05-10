import React from "react";
//Libraries
import {Box, Hidden, Link} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
//Images
import logo from "../../assets/images/logo.png"

const useStyles = makeStyles({
    logo_sm: {
        height: "100px",
    },
    logo_md: {
        height: "220px",
    },
    logo: {
        height: "250px",
    },
});

const Logo = () => {
    const classes = useStyles();
    return <Box display="flex" flexDirection="row" flexWrap="nowrap">
        <Link href="/">
            <Hidden only={['md', 'lg', 'xl']}>
                <img src={logo} alt="logo.png" className={classes.logo_sm}/>
            </Hidden>
            <Hidden only={['xs', 'sm', 'lg', 'xl']}>
                <img src={logo} alt="logo.png" className={classes.logo_md}/>
            </Hidden>
            <Hidden only={['xs', 'sm', 'md']}>
                <img src={logo} alt="logo.png" className={classes.logo}/>
            </Hidden>
        </Link>
    </Box>
}

export default Logo
