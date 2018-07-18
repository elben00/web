import React , {Component} from "react"
import MarHead from "../children/MarHead";
import {Icon} from "antd-mobile"
import {connect} from "react-redux"
import {removeUser,modifyUser,addListUser} from "../../action/index"
import Alert from "../children/Alert";
class Manger extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            id:null,
            modifyshow:false,
            userN:"",
            modifyId:null
        }
    }
    render(){
        let {list}=this.props;
        let {show,modifyshow,userN}=this.state
        return <div className="manger">
                <MarHead/>
                <div>
                    <ul>
                        {/* 循环添加 */}
                        {
                            list!==null?list.map((item,key)=>{
                                return <li key={key}>
                                    <Icon type="ellipsis"
                                        onClick={this.modify.bind(this,item.id)}/>
                                    <span>{item.userName}</span>
                                    <span>{item.baseMoney}</span>
                                    <Icon type="cross-circle" 
                                        onClick={this.remove.bind(this,item)}
                                        size="xs"/>
                                </li>
                            }):null
                        }
                    </ul>
                </div>
            {
                show?<Alert>
                    <h1>警告</h1>
                    <h3>是否确认</h3>
                    <p>
                        <button onClick={this.sure.bind(this)}>确定</button>
                        <button onClick={()=>{
                            this.setState({
                                show:false
                            })
                        }}>取消</button>
                    </p>
                </Alert>:null
            }
            {
                modifyshow?<Alert>
                    <h3>编辑用户</h3>
                    <ul>
                        <li>姓名<input type="text"  value={userN} onChange={(v)=>{this.setState({userN:v.target.value})}}/></li>
                    </ul>
                    <p>
                        <button onClick={()=>{
                            this.setState({
                                show:true,
                                modifyshow:false
                            })
                        }}>确定</button>
                        <button onClick={()=>{
                            this.setState({
                                modifyshow:false
                            })
                        }}>取消</button>
                    </p>
                </Alert>:null
            }
        </div>
    }
    componentDidMount(){
        this.props.getList()
    }
    remove(item){
        this.setState({
            show:true,
            id:item.id
        })
        
    }
    sure(){
        let {id,modifyId,userN}=this.state
        this.setState({
            show:false,
            userN:""
        })
        this.props.remove(id)
        this.props.modify({modifyId,userN})
    }
    modify(key){
        this.setState({
            modifyshow:true,
            modifyId:key
        })
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
        remove(id){
            dispatch(removeUser.bind(removeUser,id))
        },
        modify(id){
            dispatch(modifyUser.bind(modifyUser,id))
        },
        getList(){
            dispatch(addListUser.bind(addListUser))
        }
    }
}
Manger=connect(mapState,mapDispatch)(Manger)
export default Manger