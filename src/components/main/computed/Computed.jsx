import React , {Component} from "react"
import {connect} from "react-redux"
import {computedList} from "../../../action/index"
class Computed extends Component{
    render(){
        let {computed}=this.props
       return <div className="computed">
            <div className="jumbotron">
                <div>100</div>
            </div>
            <div className="table">
                <h1>
                    <span>姓名</span>
                    <span>个人总计</span>
                    <span>平均金额</span>
                    <span>应付</span>
                    <span>应收</span>
                </h1>
                <ul>
                    {/* 请求数据循环添加 */}
                    {
                        computed!==null?computed.map((item,key)=>{
                            return <li key={key}>
                                <span>{item.userName}</span>
                                <span>{item.allMoney}</span>
                                <span>{item.Average}</span>
                                <span>{item.copeWith}</span>
                                <span>{item.receivable}</span>
                            </li>
                        }):null
                    }
                </ul>
                
            </div>
       </div>
    }
    componentDidMount(){
        this.props.getComputed()
    }
}
let mapState=(state)=>{
    let {computedList}=state.submit
    return {
        computed:computedList!==null?computedList:null
    }
}
let mapDispatch=(dispatch)=>{
    return {
        getComputed(){
            dispatch(computedList)
        }
    }
}
Computed=connect(mapState,mapDispatch)(Computed)
export default Computed