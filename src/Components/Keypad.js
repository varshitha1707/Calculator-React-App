import React, { Component } from 'react'

export class Keypad extends Component {
    render() {
        return (
            <div className="Keypad">
                {this.props.children}
            </div>
        )
    }
}

export default Keypad
