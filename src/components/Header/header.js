import React,{Component} from 'react'
import { Row,Col } from 'antd'
import './header.less'
import Util from '../../util/utils'
import axios from '../../axios/axios'
export default class Header extends Component {

    stata ={
        sysTime : ''
    }
    componentWillMount () {
        this.setState({
            userName: '河角一畔'
        })

        setInterval(() => {
            let sysTime = Util.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        

    }

    render () {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24" className="header-title">
                        <span>欢迎, {this.state.userName}</span>
                        <a className="logout">退出</a>
                    </Col>
                </Row>
                <Row className="header-bottom">
                    <Col span="4" className="title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="time">{this.state.sysTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}