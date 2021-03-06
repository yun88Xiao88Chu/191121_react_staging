import React,{ Component } from "react";
import PubSub from "pubsub-js";

import Item from "../item";

export default class List extends Component{

  state = {
    userList : [],     // 用户列表
    isFirst : true,    // 是否为第一次展示
    isLoading : false, // 是否处于加载中
    err:'',            // 请求错误信息
  }

  componentDidMount(){
    PubSub.subscribe('updateListData',(_,stateObj)=>{
        this.setState(stateObj)
    })
  }

  render(){
    const {userList,isFirst,isLoading,err} = this.state
    let content = ''
    if(isFirst) content = <h2>输入关键字,点击搜索</h2>
    else if(isLoading) content = <h2>Loading...</h2>
    else if(err) content = <h2>{err}</h2>
    else content = userList.map(userObj=>{
    return <Item key = {userObj.login} {...userObj}/>})
    return (
      <div className="row">
        {content}
      </div>
    )
  }
}