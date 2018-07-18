import React from 'react';
import { cf } from '../../client.scss';

export const Column = ({text, emergencyTypeMapping}) =>
     <div data-component="Column" className={ cf("div-table-col")}>{text}</div>;

//{emergencyTypeMapping[text]} 

