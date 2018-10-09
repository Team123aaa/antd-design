import React,{Component} from 'react'
import { Card, Row, Col, Modal  } from 'antd'

import './ui.less'


export default class Gallery extends Component {

    state = {
        visiable: false,
    }
    
    handleClick = (imgSrc) => {
        this.setState({
            imgSrc: '/gallery/'+imgSrc,
            visiable: true
        })
    }

    render () {
        const list = [
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['11.png','12.png','13.png','14.png','15.png'],
            ['16.png','17.png','18.png','19.png','20.png'],
            ['21.png','22.png','23.png','24.png','25.png'],
        ]
        const imgList = list.map(list => list.map(item => 
            <Card
                style={{marginBottom: 12}}
                cover={<img src={"/gallery/"+item} />}
                onClick={()=>this.handleClick(item)}
            >
                <Card.Meta title="React study" description="xiaoxin"/>
            </Card>
        ))
        return (
            <div>
                <Modal
                    visible={this.state.visiable}
                    title="小欣的图片"
                    onCancel={()=>{
                        this.setState({
                            visiable:false
                        })
                    }}
                    footer={null}
                >
                    <img src={this.state.imgSrc} style={{width:'100%'}} />
                </Modal>
                <Row gutter={12}>
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col>
                    <Col md={5}>
                        {imgList[2]}
                    </Col>
                    <Col md={5}>
                        {imgList[3]}
                    </Col>
                    <Col md={4}>
                        {imgList[4]}
                    </Col>
                </Row>
            </div>
        )
    }
}