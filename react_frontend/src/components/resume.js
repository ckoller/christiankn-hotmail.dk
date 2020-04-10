import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
import ava from './../graphics/avatar_man.png'
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
    render() {
        return (

            <div>
                <Grid>
                    <Cell col={4}>
                        <div className='resume-left-side'>
                            <img src={ava} alt="avatar"/>
                            <h2> Christian Koller Nielsen </h2>
                            <h4> Computer Scientist </h4>
                            <hr/>
                            <p>
                                I just finished a masters degree in computer science specializing in cryptology.
                                Through my studies I have gained a broad field of interest which includes the following:
                                Software Development, Web Development, IT security, Cryptology, Data Science, Blockchain, Peer-2-peer systems.
                            </p>
                            <hr/>
                            <h5>Address</h5>
                            <p>
                                Rudesheimer Str. 3, 28199, Bremen
                            </p>
                            <hr/>
                            <h5>Phone</h5>
                            <p>
                                (+45) 50 43 63 57
                            </p>
                            <hr/>
                            <h5>Email</h5>
                            <p>
                                Christiankoller92@gmail.com
                            </p>
                            <hr/>
                        </div>
                    </Cell>
                    <Cell col={8} className='resume-right-side'>
                        <h2> Education </h2>
                        <Education/>
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2> Work Experience</h2>
                        <Experience/>
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2> Skills </h2>
                        <Skills/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;