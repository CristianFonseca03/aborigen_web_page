import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//Pages
import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Location from "./pages/Location";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/fotos" component={Gallery}/>
                <Route exact path="/carta" component={Menu}/>
                <Route exact path="/ubicacion" component={Location}/>
            </Switch>
        </Router>
    )
}

export default App
