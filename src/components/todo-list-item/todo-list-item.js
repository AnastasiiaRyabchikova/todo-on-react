import React from 'react';
import './todo-list-item.css';
export default class TodoListItem extends React.Component {
    render() {
        const {label, onDeleted, onStatusToggle, done, important, id} = this.props;
        let classNames = 'todo-list-item';
        if(done) classNames += ' done';
        if(important) classNames += ' important';
        return (
        <div className={classNames}>
            <span className='todo-list-item-label' onClick={() => onStatusToggle('done', id)} >
                {label}
            </span>
            <button type='button' onClick={() => onStatusToggle('important', id)} className='btn btn-status btn-outline-success btn-sm ml-auto mr-1'><i className='fa fa-exclamation'></i></button>

            <button type='button' onClick={onDeleted} className='btn btn-status btn-outline-danger btn-sm'><i className='fa fa-trash-o'></i></button>
        </div>
        )
    }
}