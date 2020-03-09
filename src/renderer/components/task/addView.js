import React from 'react'
import { Modal,Form,Input,InputNumber } from 'antd'
import { connect } from 'react-redux'
class AddView extends React.Component{
  constructor(){
    super()
    this.state = {
      visible: true,
      taskData: {
        url: '',
        rename: '',
        split: this.$store.getState().task.taskDefault.split,
        savePath: this.$store.getState().task.taskDefault.savePath
      }
    }
  }
  render(){
    return <div className="add-view">
            {/* <input type="valeu" ref="split" /> */}
            <Modal
              title="下载任务"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Form>
                <Form.Item>
                  <Input.TextArea value={this.state.taskData.url} placeholder="多个连接以英文逗号隔开" autoSize/>
                </Form.Item>
                <Form.Item label="重命名">
                  <Input value={this.state.taskData.rename} />
                </Form.Item>
                <Form.Item label="下载进程数">
                  <InputNumber value={this.state.taskData.split} max={16} min={1} step={1} name="split" ref="split" onChange={this.change}/>
                </Form.Item>
                <Form.Item label="存储路径">
                  <Input value={this.state.taskData.savePath}/>
                </Form.Item>
              </Form>
            </Modal>
           </div>
  }
  handleOk = () => {
    // this.$store.dispatch({type:'addTask'})
  }
  handleCancel(){

  }
  change = (num,t) => {
    console.log(num);    //获取修改后的值
    console.log(this.refs.split);
    this.setState({
      taskData: {
        url: '',
        rename: '',
        split: this.$store.getState().task.taskDefault.split,
        savePath: this.$store.getState().task.taskDefault.savePath
      }
    })
  }
}
const mapStateToProps = state => {
  return {
    url: state.task.newTaskUrl,
    split: state.task.newTaskSplit,
    rename: state.task.newTaskRename,
    savePath: state.task.newTaskSavePath
  }
}
export default connect(
  mapStateToProps
)(AddView)