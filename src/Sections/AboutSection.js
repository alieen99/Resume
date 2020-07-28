import React, {Component} from "react";
import Fullpage from "../Components/Fullpage";
import Data from "../Data.json";
import "./AboutSection.css"
import {Link} from "react-scroll";

class AboutSection extends Component{
    render() {
        return(
            <Fullpage className="second" background={this.props.background}>
                <h3 style={{ color: this.props.color }}>{Data.sections[0].title}</h3>
                <p style={{ color: this.props.color }}>{Data.sections[0].items[0].content}</p>
                <p style={{ color: this.props.color }}>{Data.sections[0].items[0].content2}</p>
                <p style={{ color: this.props.color }}>{Data.sections[0].items[0].content3}</p>
                <p style={{ color: this.props.color }}>{Data.sections[0].items[0].content4}</p>
                <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                    <a href={""}><img id="About" src={Data.down.image}/></a>
                </Link>
            </Fullpage>
        )
    }

}

export default AboutSection;