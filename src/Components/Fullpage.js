// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";
import './Fullpage.css'
class Fullpage extends Component{
    render() {
        const { children } = this.props
        return(
            <div className={`fullpage ${this.props.className} || '' ` } style={{background:this.props.background}}>
                {children}

            </div>
        )
    }

}

export default Fullpage;