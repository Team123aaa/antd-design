import React,{Component} from 'react'
import { Menu } from 'antd'
import {Link} from 'react-router-dom'

import MenuConfig from '../../resource/menuConfig'
import './navleft.less'

const SubMenu = Menu.SubMenu

export default class NavLeft extends Component {

    componentWillMount () {
        const menuTreeNode = this.renderMenu(MenuConfig)

        this.setState({
            menuTreeNode
        })
    }

    //菜单渲染 使用递归函数
    renderMenu (data) {
        return data.map((item) => {
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return  <Menu.Item title={item.title} key={item.key}>
                        <Link to={item.key}> {item.title} </Link>
                    </Menu.Item>
        })
    }

    render () {
        return (
            <div className="nav">
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Antd Design</h1>
                </div>
                <Menu 
                    theme="dark"
                    className="list-nav"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}   