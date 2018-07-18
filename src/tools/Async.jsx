import React , {Component} from "react"
export function AsyncAble(Async,Loading){
    return class Asyncs extends Component{
        constructor(props){
            super(props)
            this.state={
                Load:Loading
            }
        }
        render(){
            let {Load}=this.state
            let {children}=this.props
            return <Load children={children?children:null}/>
        }
        componentDidMount(){
            Async().then(com=>{
                this.setState({
                    Load:com.default
                })
            })
        }
    }
}
export function Loading(){
    return <div>loading</div>
}
