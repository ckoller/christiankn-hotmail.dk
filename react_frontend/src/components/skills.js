import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";

class Skills extends Component {
    skills() {
        return (
            <div className={"skills"}>
                <Grid>
                    <Cell col={1}>
                        <h5><i className='fa fa-code' aria-hidden='true'/></h5>
                    </Cell>
                    <Cell col={11}>
                        <h5> Programming Languages </h5>
                        <p>Java, C#, Python, PHP, Javascript, SQL, HTML, CSS, Bash.</p>
                    </Cell>

                    <Cell col={1}>
                        <h5><i className='fa fa-language' aria-hidden='true'/></h5>
                    </Cell>
                    <Cell col={11}>
                        <h5> Spoken and Written Languages </h5>
                        <p> English, Danish, beginner in German. </p>
                    </Cell>

                    <Cell col={1}>
                        <h5><i className='fa fa-tty' aria-hidden='true'/></h5>
                    </Cell>
                    <Cell col={11}>
                        <h5> Frameworks </h5>
                        <p> Flask, .NET, JQuery, Spring Boot, Unity3D, React.</p>
                    </Cell>

                    <Cell col={1}>
                        <h5><i className='fa fa-sitemap' aria-hidden='true'/></h5>
                    </Cell>
                    <Cell col={11}>
                        <h5> Technologies </h5>
                        <p> Git, Jenkins, Linux, ELK stack, Selenium. </p>
                    </Cell>
                </Grid>
            </div>
        )
    }

    render() {
        let skills = this.skills();
        return (
            <div>
                {skills}
            </div>
        )
    }
}

export default Skills;
