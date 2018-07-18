import React from 'react'; 
import { Row } from './Row';
import { cf } from '../../client.scss';

export const Table = ({list, mapping}) => {
    console.log(mapping);
    if (!list || !list.length ) return <div>No items to display</div>;
    const emergencyKeys = Object.keys(list[0]);

    return (
        <div data-component="Table" className={ cf("div-table") }>
            <div className={ cf("div-table-row table-header")}>
                { emergencyKeys.map( (key, index) => 
                <div key={index}  className={ cf("div-table-col")}>{ mapping[key] }</div> ) }
            </div>

            {list.map( (row, index) => <Row key={index} item={row} />)}
        </div>
    );
    
};
