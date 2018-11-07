import React, { Component } from 'react'
import { render } from 'react-dom'

class Blah extends Component {
    render() {
        return <h1>Hello Jason!</h1>
    }
}

render(<Blah/>, document.getElementById('root'))
