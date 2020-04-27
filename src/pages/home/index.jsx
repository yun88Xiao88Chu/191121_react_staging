import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from "react-router-dom";

import News from "./home_news";
import Message from "./home_message";

export default class Home extends Component {

  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <ul className="nav nav-tabs">
          <li>
            <NavLink activeClassName='demo' className="list-group-item" to='/home/news'>News</NavLink>
          </li>
          <li>
            <NavLink activeClassName='demo' className="list-group-item" to='/home/message'>Messages</NavLink>
          </li>
        </ul>
        <Switch>
           <Route path='/home/news' component = {News}/>
           <Route path='/home/message' component = {Message}/>
           <Redirect to='/home/news'/>
        </Switch>
      </div>
    )
  }
}
