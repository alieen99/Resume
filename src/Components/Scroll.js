import React, {Component} from "react";
import {Link} from 'react-scroll';


class Scroll extends Component{
    render() {
        return(
                <Link activeClass="active" to={this.props.pos} spy={true} smooth={true} offset={0} duration={500} delay={0}>
                    <a href={""}><div>{this.props.pos}</div></a>
                </Link>
        )

    }

}

export default Scroll;