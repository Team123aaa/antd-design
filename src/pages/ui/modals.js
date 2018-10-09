import React,{Component} from 'react'
import { Card, Button, Modal } from 'antd'

import './ui.less'

export default class Modals extends Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
    }

    showOpen = (type) => {
        this.setState({
            [type]: true
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title:'确认？',
            content:'你确定学会了react和会使用antd-design了吗？',
            onOk(){
                console.log('Ok')
            },
            onCancel(){
                console.log('Cancel')
            }

        })
    }

    render () {
        return (
            <div>
                <Card title="自定义弹框">
                    <Button type="primary" onClick={()=>this.showOpen('showModal1')}>Open弹窗</Button>
                    <Button type="primary" onClick={()=>this.showOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.showOpen('showModal3')}>顶部20px弹窗</Button>
                    <Button type="primary" onClick={()=>this.showOpen('showModal4')}>垂直居中弹窗</Button>
                </Card>
                <Card title="消息提示弹窗" className="card">
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('error')}>Error</Button>
                </Card>
                <Modal 
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>React学习中，配合antd-design使用</p>
                </Modal>
                <Modal 
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={()=>{
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>React学习中，配合antd-design使用</p>
                </Modal>
                <Modal 
                    title="React"
                    visible={this.state.showModal3}
                    style={{top:20}}
                    onCancel={()=>{
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>React学习中，配合antd-design使用</p>
                </Modal>

                <Modal 
                    title="React"
                    visible={this.state.showModal4}
                    wrapClassName="vertical-center-modal"
                    onCancel={()=>{
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>React学习中，配合antd-design使用</p>
                </Modal>
            </div>
        )
    }
}