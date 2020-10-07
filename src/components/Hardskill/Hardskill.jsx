import React from 'react';
import s from './Hardskill.module.css';
import Descript from "./Descript/Descript";
import HardLink from "./HardLinks/HardLinks";

const Hardskill = (props) =>{


    return(
        <div className={s.hardskills}>
            <div className={s.hardskills__itemSoft}>
                <HardLink items = {props.items}/>
            </div>
            <div className={s.hardskills__itemSoftDis}>
                <Descript/>
            </div>
        </div>
    )
}

export default Hardskill;
