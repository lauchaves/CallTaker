import React from 'react';
import { cf } from '../../client.scss';

export const Column = ({text}) =>
     <div data-component="Column" className={ cf("div-table-col")}>{text}</div>;

