import style from './Powered.module.css';
import logoBlack from '../../assets/CorebizBlack.png'
import vtex from '../../assets/vtex.png'

function Powered() {
    return (
        <div className={style.DevelopedBy}>
            <div className={style.BlackLogoWrapper}>
                <img src={logoBlack}></img>
            </div>
            <div className={style.BlackLogoWrapper}>
                <img src={vtex}></img>
            </div>
        </div>
    );
}

export default Powered;
