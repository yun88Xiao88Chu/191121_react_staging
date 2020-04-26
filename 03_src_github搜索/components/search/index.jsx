import React,{ Component } from "react";
import axios from "axios";



export default class Search extends Component{
  inputRef = React.createRef()
  search = async ()=>{
    const {updateAppState} = this.props
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
    updateAppState({isFirst:false,isLoading:true})
    try {
      const result = await axios.get(url)
      const {items} = result.data
      updateAppState({userList:items,isLoading: false})
    // 更新状态
    } catch (error) {
      updateAppState({err:error.message,isLoading: false})
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