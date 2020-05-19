import React from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AddNewItem from '../add-new-item';

import './app.css';


export default class App extends React.Component {
    maxId = 4
    state = {
        todoData: [
            {id: 1, done: false, label: 'Drink coffee', important: false},
            {id: 2, done: false, label: 'Make App', important: true},
            {id: 3, done: false, label: 'Have a launch', important: false},
            {id: 4, done: false, label: 'Learn React', important: false}
        ],
        substr: '',
        filterStatus: 'all'
    }
    deleteItem = (delId) => {
        this.setState(({todoData}) => {
            let idx = todoData.findIndex(({id}) => id === delId);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        })
    };
    addNewItem = (item) => {
        this.setState(
            ({todoData}) => {

                let newItem = {
                    id: ++this.maxId,
                    label: item,
                    important: false
                };
                let newTodoData = [newItem, ...todoData];

                return {
                    todoData: newTodoData
                }
            }
        );
    }

    toggleStatus = (status, curId) => {
        this.setState(({todoData}) => {
            let idx = todoData.findIndex(({id}) => id === curId);
            let oldItem = todoData[idx];

            let newItem = {...oldItem, ...{[status]: !oldItem[status]}};
            let newTodoData = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
            return {
                todoData: newTodoData
            }
        });
    }

    filterStr = (array, substr) => {
        return array.filter( item => item.label.toLowerCase().indexOf(substr.toLowerCase()) > -1 );
    }

    setFilterStr = (substr) => {
        this.setState({
            substr,
        });
    }

    setFilterStatus = (value) => {
        console.log('setFilterStatus: ', value);
        this.setState({
            filterStatus: value
        });
    }

    filterByStatus = (array, status) => {
        console.log('filterByStatus');
        if(status === 'all') return array;
        else if(status === 'done') return array.filter(item => item.done);
        else if(status === 'active') return array.filter(item => !item.done);
        else return array
    }

    render() {
        const {todoData, substr, filterStatus} = this.state;
        console.log(filterStatus);
        const toDo = todoData.filter((item) => !item.done).length;
        const done = todoData.filter((item) => item.done).length;
        const todoDataFiltered = this.filterByStatus(todoData, filterStatus);
        const todoDataShown = (substr.length > 0) ? this.filterStr(todoDataFiltered, substr) : [...todoDataFiltered];
        return (
            <div className='app'>
                <AppHeader toDo={toDo} done={done} /> 
                <div className='search-filter-wrp mb-3'>
                    <SearchPanel onSearch={this.setFilterStr}/>
                    <ItemStatusFilter setFilterStatus={this.setFilterStatus} filterStatus={filterStatus}/>
                </div>
                <TodoList  onStatusToggle={(status, id) => this.toggleStatus(status, id) } onDeleted={(id) => this.deleteItem(id)} todos={todoDataShown}/>
                <AddNewItem onAddNewItem={(item) => this.addNewItem(item)}/>
            </div>
        );
    };
}