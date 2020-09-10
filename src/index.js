function component() {
    const element = document.createElement('h1')
    // 无法直接体现，脚本的执行依赖于外部库。
    element.innerHTML = _.join(['hello', 'world'], '')
    // element.src='./ok.webp'(路径必须相对于HTML文件)
    return element
}
document.body.appendChild(component())