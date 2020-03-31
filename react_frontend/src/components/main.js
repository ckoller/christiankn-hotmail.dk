import React from "react";
import Landing from "./landing";
import About from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import {Route, Switch} from "react-router-dom";

const Main = () => (
    <Switch>
        <Route path="/aboutme" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects}/>
        <Route extact path="/" component={Landing}/>

    </Switch>
);


export default Main;