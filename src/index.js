//JS打包入口文件
import React from 'react'
import ReactDOM from 'react-dom'

//引入antd样式
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import App from './App.jsx'

ReactDOM.render(<App></App>,document.getElementById("app"))