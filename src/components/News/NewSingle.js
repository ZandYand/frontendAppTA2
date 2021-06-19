import React from 'react';
import './NewSingle.css';

const NewSingle = ({item}) => (
    <li className="lista">
        <p>{item.Auditiva}  <span>-</span>  {item.Visual}  <span>-</span>  {item.Grupo}</p>
    </li>
);

export default NewSingle;
