import React, {Component} from "react";
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import priv_ml from './../documents/privacy_machine_learning.pdf';
import bl_chain from './../documents/Blockchain_Project.pdf';
import mpc from './../documents/Circuit_Evaluation_Protocols_in_Practice.pdf';
import {Link} from "react-router-dom";


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 2};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={4} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff',
                        height: '176px',
                        background: 'url(https://alexandra.dk/sites/default/files/indhold/smc-explained_0.png) center / cover'
                    }}>MPC Project</CardTitle>
                    <CardText>
                        Secure Multiparty Computation Project is the bomb.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/ckoller/secretsharing"
                           rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href={mpc} download>
                            <Button colored>PDF</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={4} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff',
                        height: '176px',
                        background: 'url(https://s3.amazonaws.com/prod-www-blackline-com/blog/wp-content/uploads/2019/01/29163118/A-Conversation-With-BlackLines-Machine-Learning-Experts.jpg) center / cover'
                    }}>Privacy in Machine Learning Project</CardTitle>
                    <CardText>
                        Obtaining Privacy in collaborative machine learning through differential privacy.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/B14m3m3/Privacy-preserving-ML"
                           rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href={priv_ml} download>
                            <Button colored>PDF</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={4} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff',
                        height: '176px',
                        background: 'url(https://sloanreview.mit.edu/wp-content/uploads/2019/09/FR-Tapscott-Blockchain-Enterprise-2400.jpg) center / cover'
                    }}>Blockchain Project</CardTitle>
                    <CardText>
                        Purely theoretical project about consensus algorithms, tree growth and finalization.
                    </CardText>
                    <CardActions border>
                        <a href={bl_chain} download>
                            <Button colored>PDF</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <Grid>
                    <Cell col={12}>
                        <Card shadow={4} style={{width: '450px', margin: 'auto'}}>
                            <CardTitle style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://i.pinimg.com/originals/24/2b/4f/242b4f66b6d14b8a331c6e4289fe2ef5.jpg) center / cover'
                            }}>P2P Music Streaming</CardTitle>
                            <CardText>
                                Stream your music on your friends devices through P2P.
                            </CardText>
                            <CardActions border>
                                <a href="https://bitbucket.org/B14m3m3/p2p-musicv2/src"
                                   rel="noopener noreferrer" target="_blank">
                                    <Button colored>BitBucket</Button>
                                </a>
                                <a href={mpc} download>
                                    <Button colored>PDF</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={12}>
                        <Card shadow={4} style={{width: '450px', margin: 'auto'}}>
                            <CardTitle style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://i.pinimg.com/originals/24/2b/4f/242b4f66b6d14b8a331c6e4289fe2ef5.jpg) center / cover'
                            }}>P2P Chord</CardTitle>
                            <CardText>
                                Implementation of the Chord Protocol, where a Photon (IOT device) can connect.
                            </CardText>
                            <CardActions border>
                                <a href="https://bitbucket.org/B14m3m3/iot-p2p/src/master/"
                                   rel="noopener noreferrer" target="_blank">
                                    <Button colored>BitBucket</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>

                </Grid>

            )
        }
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}
                      ripple>
                    <Tab>Secure Multiparty Computation</Tab>
                    <Tab>Privacy in Machine Learning</Tab>
                    <Tab>Blockchain</Tab>
                    <Tab>P2P</Tab>
                </Tabs>
                <section>
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}


export default Projects;