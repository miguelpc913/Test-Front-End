import style from './Footer.module.css';
import Location from './Location/Location';
import Contact from './Contact/Contact';
import Powered from './Powered/Powered';

function Footer() {
    return (
        <footer className={style.Footer}>
            <Location></Location>
            <Contact></Contact>
            <Powered></Powered>
        </footer>
    );
}

export default Footer;
