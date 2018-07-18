import React ,{Component} from "react"
class Alert extends Component{
    render(){
        return <div className="mark">
            <div>
                {this.props.children}
            </div>
        </div>
    }
}
export default Alert