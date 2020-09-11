import _ from 'lodash'

function component() {
    const element = document.createElement('h1')
    element.innerHTML = _.join(['hello', 'world'], '')
    element.classList.add('hello')
    return element
}

document.body.appendChild(component())
import './style.css'