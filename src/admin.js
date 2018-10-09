import React,{Component} from'react'
import { Col,Row } from 'antd';

import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import NavLeft from './components/NavLeft/navleft'
import Home from './pages/home/index'
import './style/common.less'

export default class App extends Component {
    render(){
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={20} className="main">
                    <Header />
                    <div className="content">
                        {this.props.children}
                        {/* <Home /> */}
                    </div>
                    <Footer />
                </Col>
            </Row>
      )
    }
}