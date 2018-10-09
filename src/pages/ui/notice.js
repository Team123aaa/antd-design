import React,{Component} from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'

export default class Notice extends Component {

    handleNotice = (type,dirtion) => {
        if(dirtion){
            notification.config({
                placement: dirtion
            })
        }
        notification[type]({
            message:'发工资了',
            descriptiton: '发完工资，换完花呗又没有钱了。。。。'
        })
    }

    render () {
        return (
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={()=>this.handleNotice('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleNotice('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleNotice('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleNotice('error')}>Error</Button>
                </Card>
                <Card title="通知提醒框" className="card">
                    <Button type="primary" onClick={()=>this.handleNotice('success','topLeft')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleNotice('info','topRight')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleNotice('warning','bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleNotice('error','bottomRight')}>Error</Button>
                </Card>
            </div>
        )
    }
}