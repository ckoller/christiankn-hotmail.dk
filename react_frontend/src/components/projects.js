import React, {Component} from "react";
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

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
                        <Button colored>GitHub</Button>
                        <Button colored>PDF</Button>
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
                        <Button colored>GitHub</Button>
                        <Button colored>PDF</Button>
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
                        <Button colored>GitHub</Button>
                        <Button colored>PDF</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 3) {
            return (
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
                        <Button colored>GitHub</Button>
                        <Button colored>PDF</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
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
                    <Tab>P2P Music Streaming</Tab>
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