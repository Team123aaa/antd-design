import React,{Component} from 'react'
import { Card, Button, message } from 'antd'

import './ui.less'

export default class Message extends Component {
    handleMessage = (type) => {
        message[type]('恭喜你，react学会了')
    }
    render () {
        return (
            <div>
                <Card>
                    <Button type="primary" onClick={()=>this.handleMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.handleMessage('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.handleMessage('loading')}>Loading</Button>
                </Card>
            </div>
        )
    }
}