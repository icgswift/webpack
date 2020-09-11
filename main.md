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

