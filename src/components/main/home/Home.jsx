import React , {Component} from "react"
import {Link} from "react-router-dom"
import { InputItem,NoticeBar} from 'antd-mobile';
import {connect} from "react-redux"
import {addListUser} from "../../../action/index"
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            show:true,
            pwd:"123"
        }
    }
    render(){
        let {show,pwd}=this.state
        let {list}=this.props
        return <div className="home">
            <h1>
                0
            </h1>
            <p>HI 402的帅哥美女们</p>
            <div className="click">
                {
                    show?<InputItem
                        placeholder="请输入密码"
                        onChange={(v)=>{if(v===pwd){this.setState({show:false})}}}
                    />:<Link to="/manger"><button>管理用户</button></Link>
                }
            </div>
            <NoticeBar marqueeProps={{ loop: true, trailing: 800 }} icon={null}>
                Notice
            </NoticeBar>
            <ul>
                {
                    list!==null?list.map((item,key)=>{
                        return <Link to={"/detail?id="+item.id} key={key}><li>
                            <span>{item.userName}</span>
                            <span>{item.baseMoney}</span>
                        </li></Link>
                    }):null
                }
            </ul>
       </div>
    }
    componentDidMount(){
        this.props.getList()
    }
}
let mapState=(state)=>{
    let {list}=state.submit
    return{
       list:list
    }
}
let mapDispatch=(dispatch)=>{
    return {
        getList(){
            dispatch(addListUser.bind(addListUser))
        }
    }
}
Home=connect(mapState,mapDispatch)(Home)
export default Home