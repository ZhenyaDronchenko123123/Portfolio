import React from 'react';
import s from '../HardLinks.module.css';
import {NavLink} from "react-router-dom";


const HardLinkItem = (props) =>{

    let path = '/hardskill/' + props.id;
    return(
        <NavLink to={path}  >{props.name}</NavLink>
    )
};


export default HardLinkItem;