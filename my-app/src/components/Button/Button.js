import React, { Component } from 'react';
import './Button.css'
export class Button extends Component {
    render() {
        return (
            <button onClick={ this.props.onClick } className='button'>Add</button>
        )
    }
}

export default Button;
