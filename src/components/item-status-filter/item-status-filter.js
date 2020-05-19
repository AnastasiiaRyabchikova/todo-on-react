import React from 'react';

export default class ItemStatusFilter extends React.Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]
    render() {
        const {setFilterStatus, filterStatus} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            let classes = 'btn ';
            classes += name === filterStatus ? 'btn-info' : 'btn-outline-secondary';
            return (
            <button key={name} onClick={() => setFilterStatus(name)} type='button' className={classes}>{label}</button>
            )
        });
        return (
            <div className='btn-group ml-2'>
                {buttons}
            </div>
        )
    }
}