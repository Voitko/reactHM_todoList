import React, { Component } from 'react'
import './List-item.scss'
export class Listitem extends Component {
    render() {
    let classesListItem = 'list-item';
    const { isDone } = this.props
    if (isDone) {
        classesListItem += ' active'
    }
        const { data } = this.props;
        
        return (
            <li onClick={ this.props.onListItem }
            className={ classesListItem }>
                { data }
            </li>
        ) 
    }
    
}

export default Listitem;
