//webpack配置文件

//导入用于删除或清理构建目录的插件
const CleanWebpackPlugin = require('clean-webpack-plugin');

//导入用于生成html的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

//导入用于提取css的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//依赖node中的path模块
const path = require('path');

//定义一个默认模块对象
module.exports = {
    mode: 'production',
    // 指定入口文件的位置 
    entry: {                         //多人口
        index: "./src/index.js",     //入口
        app: "./src/app.js"          //入口
    },
    //设置输出结果
    output: {
        //路径，将相对路径转绝对路径
        path: path.resolve(__dirname, 'dist'),
        //多出口[name]为占位符，取entry中的key
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.css/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader //提取css并link
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Scss 编译成 CSS
                }]
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        //一定要放在前面：参数一为地址
        // new CleanWebpackPlugin(['./dist'], {}),
        //创建一个插件对象，并指定参数
        new HtmlWebpackPlugin({
            //指定生成的文件路径与名称
            filename: "../Holle.html",
            //标题
            title: "Hello!",
            minify: {
                removeComments: true,  //移除注释
                collapseWhitespace: true,  //折叠空格
                //更新请参数https://github.com/kangax/html-minifier#options-quick-reference
            }
        }),
        //创建一个用于提取css的插件对象
        new MiniCssExtractPlugin({
            filename: "[name]_[hash:10].css",
            chunkFilename: "[id]"
        })
    ]
}