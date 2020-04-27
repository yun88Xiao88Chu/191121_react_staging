import React,{ Component } from "react";
import {NavLink,Route,Switch,Redirect} from "react-router-dom";

import News from "../home_news/home_news";
import Message from "../home_message/home_message";

export default class Home extends Component{
  render(){
    return (
        <div>
          <h2>Home组件内容</h2>
          <div>
            <ul className="nav nav-tabs">
              <li>
                {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                <NavLink activeClassName='demo' className="list-group-item" to='/home/news'>News</NavLink>
              </li>
              <li>
                {/* <a className="list-group-item active" href="./home-message.html">Message</a> */}
                <NavLink activeClassName='demo' className="list-group-item" to='/home/message'>Message</NavLink>
              </li>
            </ul>
            <Switch>
              <Route path = '/home/news' component = {News}/>
              <Route path='/home/message' component = {Message} />
              <Redirect to='/home/news'/>
            </Switch>
          </div>
        </div>
    )
  }
}