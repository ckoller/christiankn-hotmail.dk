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
                                <a href="https://www.linkedin.com/in/christian-koller-nielsen-79639314b/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.xing.com/profile/ChristianKoller_Nielsen/cv" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-xing-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/ckoller" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://bitbucket.org/%7Bd453435d-041d-41a8-a630-92e906180cda%7D/?visibility=all" rel="noopener noreferrer" target="_blank">
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