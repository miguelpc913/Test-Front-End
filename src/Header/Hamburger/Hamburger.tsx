import React from 'react';
import style from './Hamburger.module.css'
import { ReactComponent as HamburgerSvg } from '../../assets/hamburger.svg'

const Hamburger = () => {
    return (
        <div className={style.HamburgerWrapper}>
            <HamburgerSvg className={style.HamburguerIcon}></HamburgerSvg>
        </div>
    );
}

export default Hamburger;
