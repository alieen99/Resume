
import React, {Component} from "react";
import Data from "../Data.json";
import "./ColorPalette.css"


class ColorPalette extends Component{
    render() {
        return(
        <img id="CP" src={Data.cp.image}/>
        )

    }

}

export default ColorPalette;