import style from './Contact.module.css';
import { ReactComponent as MailSvg } from '../../assets/mail.svg'
import { ReactComponent as HeadphonesSvg } from '../../assets/headphones.svg'

function Contact() {
    return (
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
    );
}

export default Contact;
