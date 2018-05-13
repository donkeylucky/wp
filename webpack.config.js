// Modules
const path = require('path');   //node获取文档路径
const HtmlWebPackPlugin = require('html-webpack-plugin'); // 帮生成html文件并帮你把打包好的文件嵌入html中
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); //提取指定类型的文件为一个单独文件
// const CleanWebpackPlugin = require('clean-webpack-plugin'); //打包前清理一次dist文件夹

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}


module.exports = {
    mode:'none',
    context:path.resolve(__dirname,'./src'), //绝对路径 当前入口文件的绝对路径
    entry:{ //从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。
        // 'vendor':['angular', 'angular-ui-router'],
        main:'./main.js'
    },
    output:{
        path:path.resolve(__dirname, './dist'), //打包好后输出位置
        publicPath:'/', //该配置能帮助你为项目中的所有资源指定一个基础路径, 可以解决生产环境和开发环境路径不同的问题
        filename:'[name].js'
    },
    module:{
        // 载入各种文件的工具
        rules:[
            {
                enforce:"pre",
                test:/\.js$/,
                include:[resolve('src')],
                loader:"eslint-loader",
                options:{
                    emitWarning:true,
                    // fix:true,            // 帮你修复但不是万能的
                }
            },
            // BABEL
            {
                enforce:'pre',
                test:/\.js$/,
                loader:'babel-loader',
                include:[resolve('src')],
                options:{
                    compact:true
                }
            },

            // STYLES
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap:false
                        }
                    },
                ]
            },

            // CSS / SASS
            {
                test:/\.scss/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap:false
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap:false,
                        }
                    }
                ]
            },

            // IMAGES
            {
                test:/\.(jpe?g|png|gif)$/,
                loader:'file-loader',
                options:{
                    name:'[path][name].[ext]'
                }
            },

            // HTML
            {
                test:/\.(html)$/,
                loader:'html-loader',
                options:{
                    attrs:[':data-src']
                }
            }
        ]
    },

    plugins:[
        new HtmlWebPackPlugin({
            template:"index.html"
        })
    ],

    devServer:{
        contentBase:path.join(__dirname, "dist"),
        compress:true,
        port:9000
    }

}
