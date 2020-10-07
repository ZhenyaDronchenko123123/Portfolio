import React from 'react';
import s from './HardLinks.module.css';
import HardLinkItem from "./Links/Links";


const HardLink = (props) =>{

    let HardLinkItems = props.items.map ((HardLink) => <HardLinkItem name={HardLink.name} id ={HardLink.id} />);

    return(
        <div>
            {HardLinkItems}
        </div>

    )
};

export default HardLink;