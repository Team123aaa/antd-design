import React, {Component} from 'react'
import { Table, Card, Button, Modal, message } from 'antd'

import axios from '../../axios/axios'
import Utils from '../../util/utils'

export default class BasicTable extends Component {

    state = {

    }
    params = {
        page: 1
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
            }
        }).then((res)=>{
            if( res.code == 1 ){
                res.data.list.map((item,index)=>{
                    item.key = index
                })
                this.setState({
                    dataSource:res.data.list,
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

    componentDidMount () {
        this.request();
    }

    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder:sorter.order
        })
    }

    handleDelete = (item) => {
        console.log(item)
        const id = item.id
        const username = item.username
        Modal.confirm({
            title:'提示',
            content:`确认删除这条数据吗?[${id},${username}]`,
            onOk:()=>{
                message.success('删除成功')
                this.request();
            }
        })
    }

    render () {
        const columns = [
            {
                title:'id',
                dataIndex:'id',
                width:80,
                key:'id',
            },
            {
                title:'用户名',
                dataIndex:'username',
                width:80,
                key:'username'
            },
            {
                title:'性别',
                dataIndex:'sex',
                width:80,
                key:'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                width:100,
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
                width:80,
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
                width:80,
                key:'birthday',
            },
            {
                title:'地址',
                dataIndex:'address',
                width:120,
                key:'address',
            },
            {
                title:'早期时间',
                dataIndex:'time',
                width:80,
                key:'time',
            },
        ]


        const columns2 = [
            {
                title:'id',
                dataIndex:'id',
                width:80,
                fixed:'left',
                key:'id',
            },
            {
                title:'用户名',
                dataIndex:'username',
                width:80,
                fixed:'left',
                key:'username'
            },
            {
                title:'性别',
                dataIndex:'sex',
                width:80,
                key:'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                width:100,
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
                width:80,
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
                width:120,
                key:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
                width:120,
                key:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
                width:120,
                key:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
                width:120,
                key:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
                width:120,
                key:'birthday',
            },
            {
                title:'生日',
                dataIndex:'birthday',
                width:120,
                key:'birthday',
            },
            {
                title:'地址',
                dataIndex:'address',
                width:200,
                key:'address',
            },
            {
                title:'地址',
                dataIndex:'address',
                width:200,
                key:'address',
            },
            {
                title:'地址',
                dataIndex:'address',
                width:200,
                key:'address',
            },
            {
                title:'地址',
                dataIndex:'address',
                width:200,
                key:'address',
            },
            {
                title:'地址',
                dataIndex:'address',
                width:200,
                key:'address',
            },
            {
                title:'地址',
                dataIndex:'address',
                width:200,
                key:'address',
            },
            {
                title:'地址',
                dataIndex:'address',
                width:200,
                key:'address',
            },
            {
                title:'地址',
                dataIndex:'address',
                width:200,
                key:'address',
            },
            {
                title:'地址',
                dataIndex:'address',
                width:200,
                key:'address',
            },
            {
                title:'早期时间',
                dataIndex:'time',
                width:80,
                fixed:'right',
                key:'time',
            },
        ]


        const columns3 = [
            {
                title:'id',
                dataIndex:'id',
            },
            {
                title:'用户名',
                dataIndex:'username',
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title:'年龄',
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age-b.age;
                },
                sortOrder:this.state.sortOrder
            },
            {
                title:'状态',
                dataIndex:'state',
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
            },
            {
                title:'地址',
                dataIndex:'address',
            },
            {
                title:'早期时间',
                dataIndex:'time',
            },
            {
                title:'操作',
                render:(text,item)=><Button size="small" onClick={()=>this.handleDelete(item)}>操作</Button>
                
            }
        ]
        return (
            <div>
                <Card title="头部固定">
                    <Table 
                        columns={columns} 
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="左右两侧固定" style={{margin:'20px 0px'}}>
                    <Table 
                        columns={columns2} 
                        dataSource={this.state.dataSource} 
                        scroll={{x:2910}}
                    />
                </Card>
                <Card title="排序表格" style={{margin:'20px 0px'}}>
                    <Table 
                        columns={columns3} 
                        dataSource={this.state.dataSource} 
                        onChange = {this.handleChange}
                    />
                </Card>
            </div>
        )
    }

}