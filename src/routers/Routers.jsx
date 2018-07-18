import React , {Component} from "react"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import data from "./router.js"
class Routers extends Component{
    render(){
        return <Router>
            <Switch>
                {
                    data.map((item,key)=>{
                        return <Route path={item.path} render={()=>{
                            let Con=item.component;
                            return <Con children={item.children?item.children:null}/>
                        }} key={key}></Route>
                    })
                }
                <Redirect from="/" to="/"/>
            </Switch>
        </Router>
    }
}
export default Routers