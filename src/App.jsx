//根路径
import React from 'react'
import {HashRouter,Router,Link} from 'react-router-dom'


//导入需要的ant组件
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

//导入样式
import style from './css/App.scss'
export default class extends React.Component{
        constructor(){
                super()
                this.state={
                    
                }
        }
        render(){
                return <HashRouter>
                  <Layout className="layout" style={{ height: '100%' }}>
                    <Header>
                      <div className={style.logo}></div>
                      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">首页</Menu.Item>
                        <Menu.Item key="2">新闻</Menu.Item>
                        <Menu.Item key="3">评论</Menu.Item>
                        <Menu.Item key="4">电影号</Menu.Item>
                        <Menu.Item key="5">大片</Menu.Item>
                      </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' ,height:'100%'}}>
                      <div className="site-layout-content">Content</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                  </Layout>
                </HashRouter>
        }
}