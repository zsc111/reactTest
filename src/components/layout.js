import React, { Component } from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
import '../css/layout.scss';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class layout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{lineHeight:'64px',listStyle:'none'}}>
                        <Menu.Item key="1">首页</Menu.Item>
                        <Menu.Item key="2">关于</Menu.Item>
                        <Menu.Item key="3">电影</Menu.Item>
                    </Menu>
                </Header>
               
            </Layout>

        )
    }
}
