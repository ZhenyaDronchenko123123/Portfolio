import React from 'react';
import s from './Descript.module.css'

const Message = (props) => {
    return (
        <div className={s.dis}>
            {props.message}
        </div>
    )
}

const Descript = (props) =>{
    return(
        <Message message='Hello'/>
    )
}

export default Descript;