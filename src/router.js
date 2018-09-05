import React, { Component } from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import News from './components/News';
import Hao123 from './components/Hao123';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

function RouterConfig({ history }) {
    return (
        // <Router history={history}>
        //     <Switch>
        //         <Route path='/products' exact component={Products} />
        //         <Route path="/" exact component={IndexPage} />
        //     </Switch>
        // </Router>
        <SiderDemo history={history} />
    );
}

class SiderDemo extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        console.log(this.props)
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{ minHeight: '100vh' }}
                >
                    <div style={{ height: '32px', background: 'rgba(255,255,255,0.2)', margin: '16px' }} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span onClick={()=>{this.props.history.push('/')}}>首页</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span onClick={() => { this.props.history.push('/products') }}>产品列表页</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span onClick={() => { this.props.history.push('/news') }}>百度新闻页</span>
                        </Menu.Item>
                        <Menu.Item key='4'>
                            <Icon type="upload" />
                            <span onClick={() => { this.props.history.push('/hao123') }}>hao123</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', background: '#fff', minHeight: 280,position:'relative' }}>
                        <Router history={this.props.history}>
                            <Switch>
                                <Route path='/products' exact component={Products} />
                                <Route path="/" exact component={IndexPage} />
                                <Route path='/news' exact component={News} />
                                <Route path='/hao123' exact component={Hao123} />
                            </Switch>
                        </Router>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default RouterConfig;
