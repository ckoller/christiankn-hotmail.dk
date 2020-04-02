import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "./components/main";
import {Link} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header-color" title={
                        <Link style={{textDecoration: 'none', color: 'white'}} to='/'>
                            PORTFOLIO - CHRISTIAN KOLLER NIELSEN
                        </Link>
                    } scroll>
                        <Navigation>
                            <Link to='/resume'>Resume</Link>
                            <Link to={'/aboutme'}>About Me</Link>
                            <Link to={'/projects'}>Projects</Link>
                            <Link to={'/contact'}>Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={
                        <Link to='/'>
                            PORTFOLIO
                        </Link>
                    }>
                        <Navigation>
                            <Link to='/resume'>Resume</Link>
                            <Link to={'/aboutme'}>About Me</Link>
                            <Link to={'/projects'}>Projects</Link>
                            <Link to={'/contact'}>Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content"/>
                        <Main/>
                    </Content>
                </Layout>
            </div>
            //<h1>Hello World</h1>
            //<p>My Token = {window.token}</p>
        );
    }
}


export default App;

