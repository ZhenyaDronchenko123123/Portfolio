import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const Navigation = () =>{
    return( 
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink to='/aboutme' activeClassName={s.activelink}><p>Обо мне</p></NavLink>
                
                    <NavLink to='/hardskill'activeClassName={s.activelink}><p>Hard Skills</p></NavLink>
                
                    <NavLink to='/softskill'activeClassName={s.activelink}><p>Soft Skills</p></NavLink>
               
                    <NavLink to='/experience'activeClassName={s.activelink}><p>Опыт работы</p></NavLink>

                    <NavLink to='/works'activeClassName={s.activelink}><p>Портфолио</p></NavLink>
                </li>
                
            </ul>
        </nav>
    )
}
export default Navigation;