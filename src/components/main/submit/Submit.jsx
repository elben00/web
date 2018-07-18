import React , {Component} from "react"
import { DatePicker, List, InputItem, Picker,Button} from 'antd-mobile';
import Alert from "../../children/Alert";
import {connect} from "react-redux"
import {detaiList} from "../../../action/index"
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp)
class Submit extends Component{
    constructor(props){
        super(props)
        this.state={
            date: now,
            pickerValue:[],
            money:"",
            remarks:"",//备注
            list:null,
            isShow:false,
            show:false,
            id:""
        }
    }
    render(){
        let {money,remarks,list,isShow,show}=this.state
        let {userlist,userMoney}=this.props
        return <div className="submit">
            <DatePicker
                mode="date"
                extra="Optional"
                value={this.state.date}
                onChange={date => this.setState({ date })}
            >
                <List.Item arrow="horizontal">时间</List.Item>
            </DatePicker>
            <Picker 
                extra="请输入姓名"
                data={userlist}
                cols={1}
                value={this.state.pickerValue}
                onChange={v => {
                    this.setState({ pickerValue: v })
                    userlist.forEach((item,key)=>{
                        if(item.value===v[0]){
                            this.setState({
                                id:item.id
                            })
                        }
                    })
                }}
            >
                <List.Item arrow="horizontal">姓名</List.Item>
            </Picker>
            <InputItem placeholder="请输入金额" value={money} onChange={(v)=>{this.setState({money:v})}}>金额</InputItem>
            <InputItem placeholder="请输入备注" value={remarks} onChange={(v)=>{this.setState({remarks:v})}}>
                用途备注
            </InputItem>
            <p>
                <Button type="primary" size="small" inline onClick={this.submit.bind(this)}>提交</Button>
                <Button type="warning" size="small" inline>清空</Button>
            </p>
            {
                isShow?<Alert>
                    <ul>
                        <h1>请确认</h1>
                        <li>时间：{list.time}</li>
                        <li>姓名：{list.name}</li>
                        <li>金额：{list.money}</li>
                        <li>用途：{list.remarks}</li>
                        <p>
                            <button onClick={this.click.bind(this)}>确认</button>
                            <button>取消</button>
                        </p>
                    </ul>
                </Alert>:null
            }
            {
                show?<Alert>
                    <h3>本人总金额{userMoney}</h3>
                    <p><button onClick={()=>{
                        this.setState({
                            show:false,
                            money:"",
                            remarks:""
                        })
                    }}>确定</button></p>
                </Alert>:null
            }
       </div>
    }
    submit(){
        let {money,remarks,pickerValue,date,id}=this.state
        this.setState({
            list:{
                time:date.toLocaleDateString(),
                money,
                remarks,
                name:pickerValue[0],
                id:id
            },
            isShow:true
        })
    }
    click(){
        let {list}=this.state
        // 发送axios请求
        this.props.detail(list)
        this.setState({
            isShow:false,
            show:true
        })
        // axios.get("postList",{data:{list}}).then((res)=>{

        // })
    }
}
let mapState=(state)=>{
    let {userName,userMoney}=state.submit
    return {
        userlist:userName,
        userMoney:userMoney
    }
}
let mapDispatch=(dispatch)=>{
    return {
        detail(obj){
            dispatch(detaiList.bind(detaiList,obj))
        }
    }
}
Submit=connect(mapState,mapDispatch)(Submit)
export default Submit