import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list';
export default class TodoList extends React.Component {
    render() {
        const {todos, onDeleted, onStatusToggle} = this.props;
        const elements = todos.map((item) => {
            const {id} = item;
            return (
                <li 
                    className='list-group-item'
                    key={id}
                >
                    <TodoListItem 
                        {...item} 
                        onDeleted={
                            () => onDeleted(id)
                        }
                        onStatusToggle={
                            (status, id) => onStatusToggle(status, id)
                        }
                    />
                </li>
            );
        })
        return (
            <ul className='list-group todo-list mb-2'>
                {elements}
            </ul>
        )
    }
}