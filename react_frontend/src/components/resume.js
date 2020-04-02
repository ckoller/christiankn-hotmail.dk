import React, {Component} from "react";
import { Grid, Cell} from 'react-mdl';
import ava from './../graphics/avatar_man.png'
import Education from "./education";

class Resume extends Component {
    render() {
        return (

            <div>
                <Grid>
                    <Cell col={4}>
                        <div className='resume-left-side'>
                            <img src={ava} alt="avatar" />
                            <h2> Christian Koller Nielsen </h2>
                            <h4> Computer Scientist </h4>
                            <hr/>
                            <p>
                                spiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
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
                        <h2>
                            Education
                        </h2>
                        <Education/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;