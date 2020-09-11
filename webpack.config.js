const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // webapck本身只能组织js/json 组织其他模块(资源/文件)需使用loader
    module: {
        rules: [{
            // 检测资源类型
            test: /\.css$/,
            // 配置使用loader
            use: [
                'style-loader',
                'css-loader',
                // 使用postcss
                'postcss-loader'
            ]
        }, ]
    }
}