import React,{Component} from 'react'
import { Card, Alert, Spin, Icon } from 'antd'

import './ui.less'

export default class Loadings extends Component {
    render () {
        const icon = <Icon type="loading" style={{fontSize: 24}}/>
        return (
            <div>
                <Card title="spin用法">
                    <Spin size="small"/>
                    <Spin style={{margin:'0 25px'}} />
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{marginLeft:25}}/>
                </Card>
                <Card title="内容加载" className="card">
                    <Alert
                        message="React"
                        description="react真的很难学,怎么办？？？"
                        type="info"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="react真的很难学,怎么办？？？"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="react真的很难学,怎么办？？？"
                            type="success"
                        />
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message="React"
                            description="react真的很难学,怎么办？？？"
                            type="error"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}