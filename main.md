# npm安装webpack的同时安装webpack-cli 
  此工具用于在命令行中运行 webpack

# 为什么要使用webpack？
  未使用  
          无法直接体现，脚本的执行依赖于外部库。index.js <== lodash
          如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行
          如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码

                              引入图片路径必须相对于HTML文件
                              style文件必须在HTML引入

  模块化  只能组织js资源(不能涉及BOM,DOM)  commonjs(node)/es6 module    

# 命令行工具&npm
  1.命令行工具可以执行程序的原因
                            1.1 添加了path：系统自动到path目录下寻找可被执行文件(系统默认程序可省略后缀名：exe/cmd...)
                            1.2 在某一个目录下执行命令行工具

  2.安装nodejs自带npm: nodejs安装目录下可以找到npm.cmd (且npm本身就是一个包安装在nodejs node_modules目录下) 
  3.npm 全局安装的包可以在命令行中启动：3.1 C:\Users\Administrator\AppData\Roaming\npm被添加到path
                                     3.2 全局安装在path下生成cmd文件
                                     3.3 全局安装的包保存在path下面node-modules中
                                     3.4 使用cmd文件调用安装包下应用程序

  查看全局安装的npm包 $ npm list -g --depth 0

  4.没有全局安装的包命令行调用方式    4.1 配置package.json下"scripts" $ npm run XXX(原理同4.4前一种方式)
                                   4.2 $ node-modules/.bin/XXX (失败 原因不明)
                                   4.3 进入node-modules/.bin $ XXX(默认配置失效，拿webpack来说entry.js ...需自行配置)
                                   4.4 $ npx  (本质上和4.3方法相同：1.通过模块名调用.bin目录下的package 2.如没有找到package下载使用后删除)

  5.package.json中main.js: 包的主入口 通过require(包名)main.js的exports被返回 设置pravate:true并删除main.js确保安装包私有/代码意外发布 

  6.--save-dev vs --save   打包到生产环境bundle            npm install --save
                           用于开发环境(linter/测试库...)  npm install --save-dev 

# 使用配置文件 npx webpack --config XXX(自定义,复杂配置可以拆分为多个文件)   

# 使用package.json "scripts"打包  见4.1

# webpack中使用postcss 1.为css文件添加postcss-loader 2.配置postcss.config.js
   
 