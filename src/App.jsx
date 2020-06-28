//根路径
import React from 'react'
import {HashRouter,Router,Link} from 'react-router-dom'


//导入需要的ant组件
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default class extends React.Component{
        constructor(){
                super()
                this.state={
                    
                }
        }
        render(){
                return <HashRouter>
                   <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px'}}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
                </HashRouter>
        }
}