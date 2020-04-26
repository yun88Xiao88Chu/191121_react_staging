import React,{ Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";


export default class Search extends Component{
  inputRef = React.createRef()
  search = async ()=>{

    // 获取输入
    const {value} = this.inputRef.current
    // 非法验证
    if( !value || !value.trim() ){
       alert('输入不能为空')
       return
    }
    // 发请求
    const url = `https://api.github.com/search/users?q=${value}`
    // 发请求前更新状态
    PubSub.publish('updateListData',{isFirst:false,isLoading:true})
    try {
      const result = await axios.get(url)
      const {items} = result.data
      PubSub.publish('updateListData',{userList:items,isLoading: false})
    // 更新状态
    } catch (error) {
    PubSub.publish('updateListData',{err:error.message,isLoading: false})
    }
  }

  render(){
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref = {this.inputRef} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}