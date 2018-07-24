import React from 'react';
import { Column } from './Column';
import { cf } from '../../client.scss';

export const Row = ({item, onRowClick, excludedColumns}) => 
<div onClick={ async ()=>  await onRowClick(item) } data-component="Row" className={ cf("div-table-row")} >
    {Object.keys(item).reduce( (acc, key ,index)  => {
        if ( excludedColumns.some(excludedColumn => excludedColumn === key )) 
            return acc;

        acc.push( <Column key={index} text={item[key]} />);

        return acc;
    
    }, [] )
     
    }
    
</div>;

    /*
    
    = ==, === != , !==
    !variable si es undefined o null  0 false, entre 

    
    */