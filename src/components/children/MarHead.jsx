import React , {Component} from "react"
import { NavBar, Icon,Button,InputItem,Modal } from 'antd-mobile';
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {addUser} from "../../action/index.js"
// const prompt = Modal.prompt;
class MarHead extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            userID:"",
            userName:"",
            money:""
        }
    }
    render(){
        let {userID,userName,money}=this.state
        return <header>
            <NavBar
                mode="light"
                icon={<Icon type="left"  color="#2f2f2f" onClick={()=>{
                    this.props.history.push("/")
                }}/>}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="1" 
                    type="plus" 
                    color="#2f2f2f" 
                    size="xs" 
                    onClick={()=>{this.setState({show:true})}}/>
                ]}
            >用户管理</NavBar>
            {
                this.state.show?<div className="alert">
                    <div className="box">
                        <InputItem
                            placeholder="请输入用户ID"
                            value={userID}
                            onChange={(v)=>{
                                this.setState({
                                    userID:v
                                })
                            }}
                        >用户ID</InputItem>
                        <InputItem
                            placeholder="请输入姓名"
                            value={userName}
                            onChange={(v)=>{
                                this.setState({
                                    userName:v
                                })
                            }}
                        >姓名
                        </InputItem>
                        <InputItem
                            placeholder="请输入金钱基数"
                            value={money}
                            onChange={(v)=>{
                                this.setState({
                                    money:v
                                })
                            }}
                        >金钱基数</InputItem>
                        <p>
                            <Button type="primary" size="small" inline onClick={this.posTClick.bind(this)}>提交</Button>
                            <Button type="warning" size="small" inline onClick={()=>{
                                this.setState({show:false})
                            }}>清空</Button>
                        </p>
                    </div>
                </div>:null
            }
            
        </header>
    }
    change(){

    }
    posTClick(){
        let {userID,userName,money}=this.state
        if(userID!==""&&userName!==""&&money!==""){
            this.props.userlist({userID,userName,money})
        }else{
            Modal.alert("提示","不能有空", [{text:"确定"}])
        }
        this.setState({
            userID:"",userName:"",money:""
        })
        this.setState({
            show:false
        })
    }
}
MarHead=withRouter(MarHead)
let mapState=(state)=>{
    return {}
}
let mapDispatch=(dispatch)=>{
    return {
        userlist(obj){
            dispatch(addUser.bind(addUser,obj))
        }
    }
}
MarHead=connect(mapState,mapDispatch)(MarHead)
export default MarHead