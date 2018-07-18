import React , {Component} from "react"
import { NavBar, Icon } from 'antd-mobile';
class Header extends Component{
    render(){
        return <header>
            <NavBar
                mode="dark"
                icon={<Icon type="ellipsis" />}
                onLeftClick={() => console.log('onLeftClick')}
            ></NavBar>
        </header>
    }
}
export default Header