import React, {Component} from 'react';

import {Layout, Menu, Icon} from 'antd';
import {Route, Link} from 'react-router-dom';

import 'antd/dist/antd.css';
import {LongText} from './LongText';

import './MyLayout.css';
import LoginStatus from "./LoginStatus";

const {Header, Content, Footer, Sider} = Layout;

export class MyLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span className="nav-text"><Link to="/longtext">long text</Link></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="bar-chart"/>
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="cloud-o"/>
                            <span className="nav-text">nav 5</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="appstore-o"/>
                            <span className="nav-text">nav 6</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="team"/>
                            <span className="nav-text">nav 7</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="shop"/>
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: '#fff', padding: 0}}>
                        <LoginStatus/>
                    </Header>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                            <Route path="/longtext" component={LongText}/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by XXX</Footer>
                </Layout>
            </Layout>
        );
    }
}