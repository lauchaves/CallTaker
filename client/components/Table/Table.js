import React from 'react'; 
import { Row } from './Row';
import { cf } from '../../client.scss';

export const Table = ({list}) => {
    console.log("table");
    console.log(list);
    console.log(list.length);
    console.log(!list);

    if (!list || !list.length ) return <div>No items to display</div>;

    const emergencyKeys = Object.keys(list[0]);
    console.log(list);
    console.log(emergencyKeys);

    return (
        <div data-component="Table" className={ cf("div-table") }>
            <div className={ cf("div-table-row table-header")}>{ emergencyKeys.map( (key, index) => <div key={index}  className={ cf("div-table-col")}>{ key }</div> ) }</div>
            {list.map( (row, index) => <Row key={index} item={row} />)}
        </div>
    );
    
};
