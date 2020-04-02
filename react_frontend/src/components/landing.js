import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
import ava from './../graphics/avatar_man.png'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={ava}
                            alt="avatar"
                            className="avatar"
                        />
                        <div className="banner-text">
                            <h1>Computer Scientist</h1>
                            <hr/>
                            <p> Java | C# | Python | React | HTML/CSS | Databases </p>
                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-xing-square" aria-hidden="true"></i>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-bitbucket-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;