import React, {Component} from "react";
import Fullpage from "../Components/Fullpage";
import Data from "../Data.json";
import {SocialIcon} from "react-social-icons";
import "./TitleSections.css"
import {Link} from "react-scroll";


class TitleSections extends Component{
    render() {
        return(
            <Fullpage className="first" background={this.props.background}>
                <h3 className="title" style={{ color: this.props.color }}>{Data.title}</h3>
                <div>
                    <h2 style={{ color: this.props.color }}>{Data.subtitle}</h2>
                </div>
                <div className="icons-wrapper">
                    {
                        Object.keys(Data.links).map(key => {
                            return (
                                <div className="icon">
                                    <SocialIcon url={Data.links[key]}/>
                                </div>
                            )
                        })
                    }

                </div>
                <div>
                    <Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                        <a href={""}><img id="Title" src={Data.down.image}/></a>
                    </Link>

                </div>
            </Fullpage>
        )
    }

}

export default TitleSections;