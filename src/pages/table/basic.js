import React, {Component} from 'react'
import { Table, Card, Button, Modal, message } from 'antd'

import axios from '../../axios/axios'
import Utils from '../../util/utils'

export default class BasicTable extends Component {

    state ={

    }

    componentDidMount () {
        const dataSource = [
            {
                id:'1',
                username:'JACK',
                sex:1,
                state:2,
                interest:4,
                birthday:'2018-09-09',
                address: '武汉市洪山区关山大道',
                time:'9:00'
            },
            {
                id:'2',
                username:'XIAOXIN',
                sex:2,
                state:2,
                interest:4,
                birthday:'2018-09-09',
                address: '武汉市洪山区关山大道',
                time:'9:00'
            },
            {
                id:'3',
                username:'LIULIYUAN',
                sex:4,
                state:4,
                interest:2,
                birthday:'2018-09-09',
                address: '武汉市洪山区关山大道',
                time:'9:00'
            },
        ]

        dataSource.map((item,index)=>{
            item.key = index;
        })

        this.setState({
            dataSource
        })

        this.request()
    }

    params = {
        page:1
    }
    //动态渲染表格数据
    request = () => {
        // console.log(axios.ajax)
        const _this = this
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                },
                isShowLoading:false
            }
        }).then((res)=>{
            if( res.code == 1 ){
                res.data.list.map((item,index)=>{
                    item.key = index
                })
                this.setState({
                    dataSource2:res.data.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(res,(current)=>{
                        _this.params.page = current
                        this.request()
                    })
                })
            }
        })
    }

    onRowClick = (record,index) => {
        const selectKey = [index];
        console.log(selectKey)
        this.setState({
            selectedRowKeys:selectKey,
            selectItem:record
        })
        console.log(record)
    }

    handleDelete = () => {
        const { selectedRows } = this.state
        let ids = [];
        selectedRows.map(item=>{
            ids.push(item.id)
        })

        Modal.confirm({
            title:'删除提示',
            content:`确定删除选中的[${ids.join(',')}]`,
            onOk:() => {
                message.success('删除成功')
                this.request()
            }
        })
    }

    render () {
        const columns = [
            {
                title:'id',
                dataIndex:'id',
                key:'id',
            },
            {
                title:'用户名',
                dataIndex:'username',
                key:'username'
            },
            {
                title:'性别',
                dataIndex:'sex',
                key:'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render(state){
                    let config = {
                        '1':'咸鱼一个',
                        '2':'清华才子',
                        '3':'百度ceo',
                        '4':'前端工程师',
                        '5':'python'
                    }

                    return config[state]
                }
            },
            {
                title:'爱好',
                dataIndex:'interest',
                key:'interest',
                render(interest){
                    let config = {
                        '1':'踢足球',
                        '2':'打篮球',
                        '3':'游泳',
                        '4':'学习',
                        '5':'看电影'
                    }

                    return config[interest]
                }
            },
            {
                title:'生日',
                dataIndex:'birthday',
                key:'birthday',
            },
            {
                title:'地址',
                dataIndex:'address',
                key:'address',
            },
            {
                title:'早期时间',
                dataIndex:'time',
                key:'time',
            },
            
        ]

        const {selectedRowKeys} = this.state
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        }

        const rowCheckSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys,selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table 
                        columns={columns} 
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                    />
                </Card>
                <Card title="动态渲染数据" style={{margin:'20px 0px'}}>
                    <Table 
                        columns={columns} 
                        dataSource={this.state.dataSource2} 
                    />
                </Card>

                <Card title="动态渲染数据-单选">
                    <Table 
                        columns={columns} 
                        rowSelection={rowSelection}
                        onRow={(record,index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record,index)
                                }
                            }
                        }}
                        dataSource={this.state.dataSource2} 
                    />
                </Card>

                <Card title="动态渲染数据-多选"style={{marginTop:20}}>
                    <div>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table 
                        columns={columns} 
                        rowSelection={rowCheckSelection}
                        dataSource={this.state.dataSource2} 
                    />
                </Card>

                <Card title="动态渲染数据-分页" style={{marginTop:20}}>
                    <div>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table 
                        columns={columns} 
                        rowSelection={rowCheckSelection}
                        dataSource={this.state.dataSource2} 
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}