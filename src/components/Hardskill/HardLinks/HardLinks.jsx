import React from 'react';
import s from './HardLinks.module.css';

const HardLink = (props) =>{
    return(
        <div>
            <div className={s.item}>Html5 | Scc3</div>
            <div className={s.item}>JavaScript</div>
            <div className={s.item}>React Js</div>
            <div className={s.item}>Redux</div>
            <div className={s.item}>Webpack 4</div>
            <div className={s.item}>GitHub</div>
            <div className={s.item}>npm</div>
        </div>
    )
}

export default HardLink;