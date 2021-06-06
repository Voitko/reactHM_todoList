import React, { Component } from 'react'
import './List-item.css'
export class Listitem extends Component {
    state = {
        isDone: false
    }
    render() {
        let classesListItem = 'list-item';
        const  { isDone } = this.state;
        if (isDone) {
            classesListItem += ' active'
        }
        return (
            <li onClick={ this.onListItem }
            className={ classesListItem }>
                { this.props.data }
            </li>
        ) 
    }
    onListItem = () => {
        this.setState(({ isDone }) => ({
            isDone: !isDone
        }))
    }
}

export default Listitem;
