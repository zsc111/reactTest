import React, { Component } from 'react'
import { Route, Link, withRouter, Redirect } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Home from './child/home';
import Move from './child/move';
import About from './child/about';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class one extends Component {
    constructor(props) {
        super(props)
        this.state = {
            previousPath: '',
            nowPath: '',
            openKeys: [],
            selectedKeys: [],
            list: 
            [
                {
                    "title": "首页",
                    "icon": "home",
                    "path": "/home"
                },
                {
                    "title": "商品",
                    "icon": "home",
                    "path": "/catalogProduct",
                    "children": [
                        {
                            "title": "品类管理",
                            "icon": "home",
                            "path": "/catalog"
                        },
                        {
                            "title": "商品管理",
                            "icon": "home",
                            "path": "/product"
                        }
                    ]
                },
                {
                    "title": "用户管理",
                    "icon": "user",
                    "path": "/user"
                },
                {
                    "title": "角色管理",
                    "icon": "role",
                    "path": "/role"
                },
                {
                    "title": "图形图标",
                    "icon": "home",
                    "path": "/pieline",
                    "children": [
                        {
                            "title": "饼图",
                            "icon": "home",
                            "path": "/pie"
                        },
                        {
                            "title": "折线图",
                            "icon": "home",
                            "path": "/line"
                        }
                    ]
                }
            ]

        }
    }

    // UNSAFE_componentWillMount(){
    //     console.log(this.props);
    // }
    // componentDidMount() {
    //     console.log('浏览器刷新触发');
    //     console.log(this.props)
    //     // console.log(window.location.pathname.split('/')[1])
    // }
    UNSAFE_componentWillReceiveProps(nextProps) {
        // 判断跳转路由不等于当前路由
        if (nextProps.location.pathname !== this.props.location.pathname) {
            console.log('路由改变触发');
            console.log(window.location.pathname + '000');
            console.log(this.props.location.pathname.split('/')[1]);
            console.log(nextProps.location.pathname.split('/')[1]);
            var previous = this.props.location.pathname.split('/')[1];
            var now = nextProps.location.pathname.split('/')[1];
            this.setState({
                previousPath: previous,
                nowPath: now
            }, () => {
                // console.log(this.state)
            })
            // console.log(window.location.pathname.split('/')[1])
        }
    }
    componentDidMount() {
        // 获取当前路径
        const pathname = this.props.location.pathname
        //获取当前所在的目录层级
        const rank = pathname.split('/')
        //rank = ["","policy-engine","nas-client"]
        switch (rank.length) {
            case 2:  //一级目录
                this.setState({
                    selectedKeys: [pathname]
                })
                break;
            case 3: //二级目录，要展开一个subMenu
                this.setState({
                    selectedKeys: [pathname],
                    openKeys: [rank.slice(0, 2).join('/')]
                })
                break;
            case 4: //三级目录，要展开两个subMenu
                this.setState({
                    selectedKeys: [pathname],
                    openKeys: [rank.slice(0, 2).join('/'), rank.slice(0, 3).join('/')]
                })
                break; 
        
        }
    }
    render() {
        return (
            <>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.props.history.location.pathname]}>
                            <Menu.Item key="home">
                                <Link to='/home'>首页</Link>
                            </Menu.Item>
                            <Menu.Item key="move">
                                <Link to='/move'>电影</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to='/about'>关于</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>

                    <Content>
                        <Layout>
                            <Sider width={200} className="site-layout-background">
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    style={{ height: '100%', borderRight: 0 }}
                                    onClick={this.menuClick}  selectedKeys={this.state.selectedKeys}  openKeys={this.state.openKeys}
                                >
                                    {
                                        this.state.list.map((item) => {
                                            return item.subs ? this.getParentMenu(item) : this.getChildrenMenu(item)
                                        })
                                    }
                                </Menu>
                            </Sider>


                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                    flex: 1
                                }}
                            >
                                <Route path='/home' component={Home}></Route>

                                <Route path='/move' component={Move}></Route>
                                <Route path='/about' component={About}></Route>
                                <Redirect from="/" to="/home" exact />
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>,
            </>
        )
    }
}
export default withRouter(one);