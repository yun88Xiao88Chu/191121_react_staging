import React,{ Component } from "react";

export default class MessageDetail extends Component{

  state = {
    details :[
      {id:'001',title:'message001',content:'加油，中国！'},
			{id:'002',title:'message002',content:'加油，武汉！'},
			{id:'003',title:'message003',content:'加油，尚硅谷！'},
    ]
  }

  render(){
    const {id} = this.props.match.params
    let result = this.state.details.find(detailObj=>detailObj.id === id)
    return (
      <ul>
        <li>ID:{result.id}</li>
        <li>TITLE:{result.title}</li>
        <li>CONTENT:{result.content}</li>
      </ul>
    )
  }
}