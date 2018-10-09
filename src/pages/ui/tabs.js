import React,{Component} from 'react'
import { Card, Tabs, message, Icon } from 'antd'

import './ui.less'

const TabPane = Tabs.TabPane

export default class Tab extends Component {

    newTabIndex  = 0;
    componentWillMount () {
        const  panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
        ];
        this.setState({
            panes,
            activeKey:panes[0].key
        })

    }

    handleCallback = (key) => {
        message.info('你点击了标签'+key)
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }
    
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
            lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    render () {
        return (
            <div>
                <Card title="tab标签">
                    <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
                        <TabPane tab="tab 1" key="1">react高级教程一</TabPane>
                        <TabPane tab="tab 2" key="2">react高级教程二</TabPane>
                        <TabPane tab="tab 3" key="3">react高级教程三</TabPane>
                    </Tabs>
                </Card>

                <Card title="带图tab标签" className="card">
                    <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus"/>tab 1</span>} key="1">react高级教程一</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>tab 2</span>} key="2">react高级教程二</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>tab 3</span>} key="3">react高级教程三</TabPane>
                    </Tabs>
                </Card>

                <Card title="增加tab标签" className="card">
                    <Tabs 
                        defaultActiveKey='1' 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map(item=>{
                                return <TabPane tab={item.title} key={item.key}>{item.content}</TabPane>
                            })
                        }
                    </Tabs>
                </Card>

            </div>
        )
    }
}