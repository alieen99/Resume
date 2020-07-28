import React, {Component} from 'react';

import TitleSections from "./Sections/TitleSections";
import AboutSection from "./Sections/AboutSection";
import SkillsSection from "./Sections/SkillsSection";
import {Element } from 'react-scroll';
import Scroll from "./Components/Scroll";
import ColorPalette from "./Components/ColorPalette";
import Snowfall from 'react-snowfall'
import './App.css';
import "./Components/Navbar.css"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color_first: "#05480c",
            color_second:"#104310" ,
            color_third:"#250bb0" ,
            background_first: "#ffffff",
            background_second: "#5fca2e",
            background_third: "#ada7cb",
            counter: 0
        }
    }
    changeColor = () => {

        let rang = ["#f34471", "#0c69e3", "#8269e3","#104310"];
        let zamine = ["#461220", "#011f4b", "#251e3e", "#ffffff","#5fca2e"];
        if (this.state.counter >= 3) {
            this.setState({
                counter: 0,
                color_first: rang[this.state.counter],
                color_second:rang[this.state.counter+1] ,
                color_third: rang[this.state.counter+2] ,
                background_first: zamine[this.state.counter],
                background_second: zamine[this.state.counter+1],
                background_third: zamine[this.state.counter+2],
            });
        } else
            this.setState({
                color_first: rang[this.state.counter],
                color_second:rang[this.state.counter+1] ,
                color_third: rang[this.state.counter+2] ,
                background_first: zamine[this.state.counter],
                background_second: zamine[this.state.counter+1],
                background_third: zamine[this.state.counter+2],
                counter: this.state.counter + 1
            });
    };
    render() {
        return (
            <div className="App">
                <Element name="Top" className="element"/>
                <div className="navbar">
                    <div><Scroll pos="About"/></div>
                    <div><Scroll pos="Skills"/></div>
                    <div onClick={this.changeColor}><ColorPalette/></div>
                </div>
                <Snowfall/>
                <TitleSections color={this.state.color_first} background={this.state.background_first}/>
                <Element name="About" className="element"/>
                <AboutSection id={"about"} color={this.state.color_second} background={this.state.background_second}/>
                <Element name="Skills" className="element"/>
                <SkillsSection color={this.state.color_third} background={this.state.background_third}/>
            </div>
        );
    }
}
export default App;
