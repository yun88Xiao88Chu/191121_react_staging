import React,{ Component } from "react"
import {NavLink,Route,Switch,Redirect} from "react-router-dom"

import Detail from "./detail"

export default class Message extends Component{

  state = {
    messages :[
      {id:'001',name:'message001'},
      {id:'002',name:'message002'},
      {id:'003',name:'message003'}
    ]
  }

  render(){
    return (
      <div>
        <ul>
          {this.state.messages.map(msgObj=>{
            return (
              <li key={msgObj.id}>
                <NavLink replace={true} activeClassName='demo' to={`/home/message/detail/${msgObj.id}`}>{msgObj.name}</NavLink>&nbsp;&nbsp;
                <button onClick={()=>{this.push(msgObj.id)}}>push查看</button>&nbsp;&nbsp;
                <button onClick={()=>{this.replace(msgObj.id)}}>replace查看</button>
              </li>
            )
          })}
        </ul>
        <button>回退</button>
        <hr />
        <Switch>
           <Route path='/home/message/detail/:id' component={Detail}/>
           <Redirect to='/home/message/detail/001'/>
        </Switch>
      </div>
    )
  }
}