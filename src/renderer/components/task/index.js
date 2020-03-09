import React from 'react'
import AddView from './addView'

class Task extends React.Component{
  constructor(){
    super()
    this.state = {
      
    }
  }
  render(){
    return <div className="task-view">
              <AddView></AddView>
           </div>
  }
}

export default Task