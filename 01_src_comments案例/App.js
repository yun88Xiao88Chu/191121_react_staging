import React,{Component} from "react";

import Add from "./components/Add";
import List from "./components/List";


export default class App extends Component{

  state = {
    comments:[
    	{id:'001',username:'哈哈',content:'都说挺难的，我觉得不过如此'},
			{id:'002',username:'嘿嘿',content:'我觉得还是vue更香'},
			{id:'003',username:'嘻嘻',content:'我会抢答了~~'},
    ]
  }

  addComment = (commentObj)=>{
    //函数体
    const {comments} = this.state
    this.setState({comments:[commentObj,...comments]})
  }

  deleteComment = (id)=>{
    //函数体
    const {comments} = this.state
    const index = comments.findIndex(commentObj=>commentObj.id === id)
    comments.splice(index,1)
    this.setState({comments})
  }

  render(){
    const {comments} = this.state
    return (
      <div id="app">
          <div>
            <header className="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>请发表对React的评论</h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">
              <Add addComment={this.addComment}/>
              <List comments={comments} deleteComment = {this.deleteComment}/>
            </div>
          </div>
      </div>
    )
  }
}