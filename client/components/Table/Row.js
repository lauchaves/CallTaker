import React from 'react';
import { Column } from './Column';
import { cf } from '../../client.scss';

export const Row = ({item, emergencyTypeMapping}) => 
<div data-component="Row" className={ cf("div-table-row")} >
    {Object.keys(item).map( (key, index) => <Column key={index} emergencyTypeMapping={emergencyTypeMapping} text={item[key]} />)}
</div>;
