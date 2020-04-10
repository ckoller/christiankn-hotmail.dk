import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";
import Collapsible from "react-collapsible";

class Education extends Component {
    master() {
        return (
            <div className={"education"}>
                <Grid>
                    <Cell col={4}>
                        <p>2017 - 2020</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{margin: '0px'}}>Master of Computer Science</h4>
                        <i style={{margin: '0px'}}>Department of Computer Science, Aarhus University</i>
                        <Collapsible trigger="Course List" className="collapsibleOuter">
                            <Collapsible trigger="Elective Courses">
                                <p>Advanced Augmented Reality Project</p>
                                <p>Algorithms in Bioinformatics</p>
                                <p>Augmented Reality</p>
                                <p>Cloud Computing and Architecture</p>
                                <p>Cryptographic Computing</p>
                                <p>Cryptologic Protocol Theory</p>
                                <p>Embedded Systems - Embodied Agents, Digital Control in a</p>
                                <p>Physical World</p>
                                <p>Internet of Things/Peer-Networking</p>
                                <p>Internet of Things/Peer-Project</p>
                                <p>Cryptology</p>
                                <p>Machine Learning</p>
                                <p>Project Work in Computer Science</p>
                                <p>Title: Blockchain Project</p>
                            </Collapsible>
                            <Collapsible trigger="Thesis in Computer Science">
                                <p>Thesis in Computer Science:</p>
                                <p>Title: Secure Circuit Evaluation Protocols in Practice</p>
                            </Collapsible>
                        </Collapsible>
                    </Cell>
                </Grid>
            </div>
        )
    }

    bachelor() {
        return (
            <div className={"education"}>
                <Grid>
                    <Cell col={4}>
                        <p>2013 - 2017</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{margin: '0px'}}>Bachelor of Computer Science</h4>
                        <i style={{margin: '0px'}}>Department of Computer Science, Aarhus University</i>
                        <Collapsible trigger="Course List" className="collapsibleOuter">
                            <Collapsible trigger="Compulsory Courses">
                                <p>Computer Architecture</p>
                                <p>Pervasive Computing (Operating Systems)</p>
                                <p>Philosophy of Information Technology and Computer Science</p>
                                <p>Software Architecture</p>
                                <p>Security</p>
                                <p>Perspectives in Computer Science</p>
                                <p>Distributed Systems</p>
                                <p>Databases</p>
                                <p>Concurrency</p>
                                <p>Computability and Logic</p>
                                <p>Algorithms and Data Structures 2</p>
                                <p>Programming Languages</p>
                                <p>Regularity and Automata</p>
                                <p>Web Technology</p>
                                <p>Programming 2</p>
                                <p>Introduction to Programming</p>
                                <p>Algorithms and Data Structures 1</p>
                                <p>Interaction Design</p>
                            </Collapsible>
                            <Collapsible trigger="Supplementary Subject, Mathematics">
                                <p>Calculus 1</p>
                                <p>Calculus 2</p>
                                <p>Mathematical Modelling 1</p>
                                <p>Introduction to Mathematical Modelling</p>
                                <p>Linear Algebra</p>
                            </Collapsible>
                            <Collapsible trigger="Supplementary Subject, Science">
                                <p>Software Test</p>
                                <p>Embedded Software Development</p>
                                <p>GUI Programming</p>
                                <p>Smartphone Applications</p>
                                <p>Introduction to Communication Networks</p>
                            </Collapsible>
                        </Collapsible>
                    </Cell>
                </Grid>
            </div>
        )
    }

    render() {
        let ma = this.master();
        let ba = this.bachelor();
        return (

            <div>
                {ma}
                {ba}
            </div>


        )
    }
}

export default Education;
