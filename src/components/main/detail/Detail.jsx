import React , {Component} from "react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {userDetail} from "../../../action/index"
class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            id:null
        }
    }
    render(){
        let {userDetail}=this.props;
        return <div className="detail">
            <ul>
                 {userDetail!==null?<li>
                        {userDetail.map((val,index)=>{
                            return <p key={index}>
                                <span>{new Date(val.time).toLocaleDateString()}</span>
                                <span>{val.money}</span>
                                <span>{val.remarks}</span>
                            </p>
                        })}
                    </li>
               :null}
            </ul>
        </div>
    }
    componentDidMount(){
        let {location}=this.props
        let {id}=this.state
        id=location.search.slice(1).split("=")[1]
        this.setState({id})
        this.props.getUserDetail(id)
    }
}
Detail=withRouter(Detail)
let mapState=(state)=>{
    let {userDeteil}=state.submit
    return {
        userDetail:userDeteil
    }
}
let mapDispatcn=(dispatch)=>{
    return {
        getUserDetail(id){
            dispatch(userDetail.bind(userDetail,id))
        }
    }
}
Detail=connect(mapState,mapDispatcn)(Detail)
export default Detail