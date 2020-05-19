import React from 'react';
import './app-header.css';

export default class AppHeader extends React.Component {
    render() {
        const {toDo, done} = this.props;
        return (
            <div className='app-header mb-2'>
                <h1>Todo List</h1>
                <span className="text-muted">{toDo} more todo, {done} done</span>
            </div>
        )
    }
}