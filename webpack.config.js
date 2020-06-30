const path=require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    mode:'production',
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:"index.html"
        }),
    ],
    module:{
        rules:[
            { test:/\.js|jsx$/,loaders:'babel-loader',exclude:/node_modules/,options:{
                presets:["env", "react",]
            }},
            {test: /\.css$/, use:['style-loader','css-loader']},//modules只有在css-loader才能用，启动模块化
            
            //运行cnpm i url-loader file-loader -D
            {test:/\.(ttf|eot|svg|woff|woff2)$/,loader:'url-loader'},
            {test:/\.(jpg|png|gif|jpeg|bmp)$/,loader:'url-loader?',options:{esModule:false,limit:10240}},
           
            //运行cnpm i sass-loader node-sass sass fibers-D
            {test:/\.scss$/,use: [
                {loader:'style-loader'}, 
                {
                    loader:'css-loader',
                    options:{
                        modules: {
                            //[path]:表示样式表，相对于项目根目录
                            //[name]:表示样式表文件名称
                            //[local]:表示样式类名定义的名称
                            //[hash:length]：表示hash值，避免重复
                            localIdentName: '[path][name]-[local]-[hash:base64:5]',//hash防止类名重读
                        },
                    },
                },
                {loader:'sass-loader'}, 
            ]},
        ]
    }

}