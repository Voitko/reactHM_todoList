
import React, { Component } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'

export class App extends Component {
    state = {
        data: [
            { label: 'Нужно покушать', id: 'asydd', isDone: false }
        ],
        inputValue: 'Hello World'
    }
    onButtonAdd = () => {
        this.setState(({ data, inputValue }) => ({
            data: [...this.state.data, { label: inputValue, id: Date.now(), isDone: false}]
        }))
    }
    onForm = (e) => {
        this.setState({
        inputValue: e.target.value
        })
    }
    
    toogleToDo = (idName) => {
        let newData = [...this.state.data];
        const index = newData.findIndex(elem => elem.id === idName);
        newData[index] = Object.assign({}, newData[index], {isDone: !newData[index].isDone});
        this.setState({ data: newData })
  }

  render() {
    const { data, inputValue } = this.state;
    
      return (
            <div className = 'todoList'>
          <List posts = {data} onListItem = {this.toogleToDo}/>
                <Form inputValue = { inputValue } 
                  onForm = { this.onForm }
                  onButtonAdd = { this.onButtonAdd }
                />
            </div>
        )
    }
}

export default App;
