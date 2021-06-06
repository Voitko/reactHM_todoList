
import React, { Component } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'

export class App extends Component {
    state = {
        data: [
            { label: 'Нужно покушать', id: 'asydd' },
            { label: 'Сделать дз', id: 'assdd'},
            { label: 'Прогуляться пеерд сном', id: 'asdfd' }
        ],
        inputValue: 'Hello World'
    }
    onClickHandler = () => {
        this.setState(({ data, inputValue }) => ({
            data: [...this.state.data, { label: inputValue, id: Date.now() }]
        }))
    }
    onForm = (e) => {
        this.setState({
        inputValue: e.target.value
        })
    }
    render() {
        return (
            <div className='todoList'>
            <List posts={ this.state.data } />
            <Form inputValue={ this.state.inputValue } 
              onForm={ this.onForm }
              onClick={ this.onClickHandler }
            />
            </div>
        )
    }
}

export default App;
