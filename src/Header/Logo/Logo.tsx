import style from './Logo.module.css'
import logo from '../../assets/LOGO_COREBIZ.png'

const Logo = () => {
    return (
        <div className={style.LogoWrapper}>
            <img src={logo}></img>
        </div>
    );
}

export default Logo;
