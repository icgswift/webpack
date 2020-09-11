var _ = require('./lodash')
var {
    name
} = require('./test')
console.log(name)
console.log(_)


function component() {
    const element = document.createElement('h1')
    element.innerHTML = _.join(['hello', 'world'], '')
    return element
}

document.body.appendChild(component())

// 不符合commonjs规范
// import './css/test.css'