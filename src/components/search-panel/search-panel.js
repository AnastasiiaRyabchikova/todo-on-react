import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component {
    state = {
        searchText: 'search item',
    }
    onValueChange = (e) => {
        this.props.onSearch(e.target.value)
    }
    render() {
        const {searchText} = this.state;
        return (
            <input onChange={this.onValueChange} className='search-panel form-control' type='text' placeholder={searchText} />
        )
    }
}