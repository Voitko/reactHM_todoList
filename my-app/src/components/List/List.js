import React, { Component } from 'react'
import './List.css'
import ListItem from '../List-item'
export class List extends Component {
    render() {
        let innerText = this.props.posts.map(({ label, id }) => {
            console.log(id)
            return <ListItem data={ label } key={ id }/>
        })
        return <ul className='list'>{ innerText }</ul>;
    }
}

export default List;
