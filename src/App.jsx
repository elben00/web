import React, { Component } from 'react';
import {Provider} from "react-redux"
import store from "./store/index"
import Routers from './routers/Routers.jsx';
import 'antd-mobile/dist/antd-mobile.css';
import "./static/css/style.css"
class App extends Component {
    render() {
        return (
          <Provider store={store}>
              <Routers/>
          </Provider>
        );
    }
}

export default App;
