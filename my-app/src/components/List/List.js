import React, { Component } from 'react'
import './List.css'
import ListItem from '../List-item'
export class List extends Component {
    render() {
        return (<ul className='list'>
                    {this.props.posts.map(({ label, id, isDone }) => {
                        return (<ListItem
                                    onListItem={() => {this.props.onListItem(id)}}
                                    data={label}
                                    key={id}
                                    isDone={isDone}
                                />)
                    })}
                </ul>);
    }
}

export default List;
