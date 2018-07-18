import React , {Component} from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import Footer from "../children/Footer";
import Header from "../children/Header";
class Main extends Component{
    render(){
        let {children}=this.props
        return <div className="wrap">
            <Header/>
            <div className="content">
                <Switch>
                    {children.map((item,key)=>{
                        return <Route path={item.path} key={key} component={item.component}>
                        </Route>
                    })}
                    <Redirect from="/" to="/home"/>
                </Switch>
            </div>
            <Footer children={children}/>
        </div>
    }
}
export default Main