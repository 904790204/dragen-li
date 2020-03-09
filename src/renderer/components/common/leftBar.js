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
    // let myNotification = new Notification('标题', {
    //   body: '通知正文内容'
    // })
    
    // myNotification.onclick = () => {
    //   console.log('通知被点击')
    // }
  }
}

export default LeftBar