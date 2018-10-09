import React,{Component} from 'react'
import { Card, Button,Icon,Radio } from 'antd'

import './ui.less'

export default class Buttons extends Component {

    state = {
        size:'default'
    }

    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    render () {
        return (
            <div>
                <Card title="普通按钮">
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图标按钮" className="card">
                    <Button icon="plus">增加</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="loading按钮" className="card">
                    <Button type="primary" loading={true}>确定</Button>
                    <Button shape="circle" loading={true}></Button>
                    <Button type="primary" loading={true}></Button>
                    <Button loading={true}>点击加载</Button>
                    <Button type="primary">关闭</Button>
                </Card>
                <Card title="按钮组" className="card">
                    <Button.Group>
                        <Button type="primary" icon="left" style={{marginRight:0}}>前进</Button>
                        <Button type="primary">后退<Icon type="right" /></Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card">
                    <Radio.Group onChange={this.handleChange} value={this.state.size}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                </Card>
            </div>
        )
    }
}