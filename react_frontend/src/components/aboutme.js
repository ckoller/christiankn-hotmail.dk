import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";

class About extends Component {
    render() {
        return (
            <div style={{textAlign: 'center', margin: '2em'}}>
                <div className="about">
                    <Grid>
                        <Cell col={12}>
                            <h1>Hello,</h1>
                            <h5>I am Christian</h5>
                            <p> Below is a list of interests: </p>
                        </Cell>
                        <Cell col={2}>
                            <p> Academic: </p>
                        </Cell>
                        <Cell col={10}>
                            <p> Network Security, Pentesting, solving programming tasks, Web development. </p>
                        </Cell>

                        <Cell col={2}>
                            <p> Sport: </p>
                        </Cell>
                        <Cell col={10}>
                            <p> Running, fitness, football, dancing. </p>
                        </Cell>

                        <Cell col={2}>
                            <p> Other </p>
                        </Cell>
                        <Cell col={10}>
                            <p> Cooking, board games, fishing, movies, concerts, travelling. </p>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default About;