import React from 'react'; 
import { Row } from './Row';
import { cf } from '../../client.scss';

export const Table = ({list, headerMapping, emergencyTypeMapping, onRowClick}) => {

    if (!list || !list.length ) return <div>No items to display</div>;
    const emergencyKeys = Object.keys(list[0]);

    return (
        <div data-component="Table" className={ cf("div-table") }>
            <div className={ cf("div-table-row table-header")}>
                { emergencyKeys.map( (key, index) => 
                <div key={index}  className={ cf("div-table-col")}>{ headerMapping[key] }</div> ) }
            </div>

            {list.map( (row, index) => <Row onRowClick={onRowClick} key={index} emergencyTypeMapping={emergencyTypeMapping} item={row} />)}
        </div>
    );
    
};
