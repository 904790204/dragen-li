import React from 'react'
import { Icon } from 'antd';

class LeftBar extends React.Component{
  constructor(){
    super()
    this.state = {
      
    }
  }
  render(){
    return <div className="left-bar">
            <Icon type="menu" />
            <Icon type="setting" />
            <Icon type="folder-add" onClick={this.addTask}/>
           </div>
  }
  addTask = () => {
    this.$store.dispatch({type:'addTask'})
  }
}

export default LeftBar