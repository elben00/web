import React , {Component} from "react"
import {Link} from "react-router-dom"
class Footer extends Component{
    constructor(props){
        super(props)
        this.state={
            index:0
        }
    }
    render(){
        let {children}=this.props
        let {index}=this.state
       return <footer>
           {
               children.map((item,key)=>{
                    return <Link to={item.path} 
                                key={key} 
                                className={key===index?"active":null} 
                                onClick={()=>{
                                    this.setState({
                                        index:key
                                    })
                                }}>
                        <span>
                            <img src={key===index?item.src1:item.src} alt=""/>
                        </span>
                        <b>{item.title}</b>
                    </Link>
               })
           }
       </footer>
    }
}
export default Footer