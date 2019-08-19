const path = require('path');

// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {	
  entry: './src/main.js',//入口文件
output: {// 输出文件相关的配置(出口文件)
  path: path.resolve(__dirname, 'dist'),// 配置输出的路径
  filename: 'bundle.js'// 配置输出的文件名
},

plugins: [ // 配置插件的节点
	new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
	  template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
	  filename: 'index.html' // 指定生成的页面的名称
	})
]

}
// 当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
//  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；