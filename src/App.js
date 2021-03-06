import React,{ Component } from "react";
import {NavLink,Route,Switch,Redirect} from "react-router-dom";

import Title from "./components/title";
import About from "./pages/about";
import Home from "./pages/home";

export default class  App extends Component{
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><Title /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="/about">About</a>
              <a className="list-group-item active"href="/home" aria-current="page">Home</a> */}
              <NavLink activeClassName='demo' className="list-group-item" to='/about'>About</NavLink>
              <NavLink activeClassName='demo' className="list-group-item" to='/home'>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                   <Route path='/about' component={About}/>
                   <Route path='/home' component={Home}/>
                   <Redirect to='/about' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}