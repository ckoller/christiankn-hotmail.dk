import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";

class Experience extends Component {
    danskeBank() {
        return (
            <div className={"education"}>
                <Grid>
                    <Cell col={4}>
                        <p>2016 - 2019</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{margin: '0px'}}>IT Student</h4>
                        <i style={{margin: '0px'}}>Danske Bank, Aarhus, Denmark</i>
                        <p> In the Bank I worked between 10-15 hours per week and I had tasks such as:</p>
                        <p> - Creating a pipeline that continuously ingests data from multiple sources simultaneously,
                            transform it, send it to a place where it can be analyzed and visualised.
                        </p>
                        <p> - Test automation using Selenium, C# and NUnit. </p>
                        <p> - Maintain a sharepoint learning platform. </p>
                    </Cell>
                </Grid>
                <h2>Other Work Experience</h2>
                <Grid>
                    <Cell col={4}>
                        <p>2013 - 2013</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{margin: '0px'}}>Entertainment team</h4>
                        <i style={{margin: '0px'}}>Hotel Ivory Playa, Acludia, Spain</i>
                    </Cell>
                    <Cell col={4}>
                        <p>2009 - 2011</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{margin: '0px'}}>Service Employee at a supermarket</h4>
                        <i style={{margin: '0px'}}>SuperBrugsen, Oksboel, Denmark</i>
                    </Cell>
                    <Cell col={4}>
                        <p>2009 - 2011</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{margin: '0px'}}>Kicthen Helper</h4>
                        <i style={{margin: '0px'}}>Ho Bownling Center, Ho, Denmark</i>
                    </Cell>
                </Grid>
            </div>
        )
    }


    render() {
        let danskeBank = this.danskeBank();
        return (

            <div>
                {danskeBank}
            </div>


        )
    }
}

export default Experience;
