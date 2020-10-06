import React from 'react';
import s from './Hardskill.module.css';

const Hardskill = (props) =>{
    return(
        <div className={s.hardskills}>
            <div className={s.hardskills__itemSoft}>
                <div>Html5 | Scc3</div>
                <div>JavaScript</div>
                <div>React Js</div>
                <div>Redux</div>
                <div>Webpack 4</div>
                <div>GitHub</div>
                <div>npm</div>
            </div>
            <div className={s.hardskills__itemSoftDis}>

            </div>
        </div>
    )
}

export default Hardskill;
