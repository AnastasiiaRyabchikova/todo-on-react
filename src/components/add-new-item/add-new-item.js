import React from 'react';
import './add-new-item.css';
export default class ItemStatusFilter extends React.Component {
    state = {
        searchText: 'add new Item',
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({label: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddNewItem(this.state.label);
        this.setState({label: ''});
    }
    render() {
        const {searchText, label} = this.state;
        return (
            <form className='add-new-item' onSubmit={this.onSubmit}>
                <input 
                    className='search-panel form-control'
                    type='text' placeholder={searchText}
                    onChange={this.onLabelChange}
                    value={label}
                />
                <button type='submit' className='btn btn-info ml-2'>Add</button>
            </form>
        )
    }
}