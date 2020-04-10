import React, {Component} from "react";
import {Cell, Grid, List, ListItem, ListItemContent} from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Christian Koller Nielsen </h2>
                        <img
                            src="https://scontent-dus1-1.xx.fbcdn.net/v/t1.0-1/p240x240/64921396_10219958109680135_6098489901144080384_o.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=wf-seZmH6gAAX8_uKgZ&_nc_ht=scontent-dus1-1.xx&_nc_tp=6&oh=31deb2962ec37e239947d5a3d57a9d7f&oe=5EA89394"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p>
                            asasdasdas
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                                        (+ 45) 50 43 63 57
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        Christiankoller92@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"></i>
                                        Kollefar
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;