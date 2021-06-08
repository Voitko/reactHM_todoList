import React, { Component } from 'react';
import './Form.css'
import Button from '../Button'
export class Form extends Component {
    render() {
    
        return (
            <div className = 'form'>
                <input
                    onChange = { this.props.onForm }
                    type = "text"
                    placeholder = 'Введите действие'
                    value=  { this.props.inputValue }
                />
                <Button onButtonAdd = { this.props.onButtonAdd }/>
            </div>
        )
    }
}

export default Form;
