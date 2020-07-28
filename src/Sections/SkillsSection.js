import React, {Component} from "react";
import Fullpage from "../Components/Fullpage";
import Data from "../Data.json";
import SkillCard from "../Components/SkillCard";
import "./SkillsSection.css"
import {Link} from "react-scroll";


class SkillsSection extends Component{
    render() {
        return(
            <Fullpage className="third" background={this.props.background}>
                <h3></h3>
                <h3 style={{ color: this.props.color }}>{Data.sections[1].title}</h3>
                <div className="cards-wrapper">
                    {
                        Data.sections[1].items.map(eachSkill => {
                            return (
                                <SkillCard skill={eachSkill}/>
                            )
                        })
                    }
                </div>
                <Link activeClass="active" to="Top" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                    <a href={""}><img id="About" src={Data.up.image} style={{margin:50}}/></a>
                </Link>
            </Fullpage>

        )
    }

}

export default SkillsSection;