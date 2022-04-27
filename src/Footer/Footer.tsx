import style from './Footer.module.css';
import { ReactComponent as MailSvg } from '../assets/mail.svg'
import { ReactComponent as HeadphonesSvg } from '../assets/headphones.svg'
import logoBlack from '../assets/CorebizBlack.png'
import vtex from '../assets/vtex.png'


function Footer() {
    return (
        <footer className={style.Footer}>
            <div className={style.Location}>
                <div className={style.LocationTitle}>
                    <h3>Ubicacion</h3>
                </div>
                <ul>
                    <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
                    <li>Alphavile SP</li>
                    <li>brasil@corebiz.ag</li>
                    <li>+55 11 3090 1039</li>
                </ul>
            </div>
            <div className={style.Contact}>
                <div className={style.ContactBox}>
                    <div className={style.ContactSvgWrapper}>
                        <MailSvg></MailSvg>
                    </div>
                    <span>Contactanos</span>
                </div>
                <div className={style.ContactBox}>
                    <div className={style.ContactSvgWrapper}>
                        <HeadphonesSvg></HeadphonesSvg>
                    </div>
                    <span>Habla con un consultor</span>
                </div>
            </div>
            <div className={style.DevelopedBy}>
                <div className={style.BlackLogoWrapper}>
                    <img src={logoBlack}></img>
                </div>
                <div className={style.BlackLogoWrapper}>
                    <img src={vtex}></img>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
