import style from './Header.module.css';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';
import CartIcon from './Cart/Cart';
import SearchBar from './SearchBar/SearchBar';
import Account from './Account/Account'

function Header() {
    return (
        <div className={style.Header}>
            <Hamburger></Hamburger>
            <Logo></Logo>
            <CartIcon></CartIcon>
            <SearchBar></SearchBar>
            <Account></Account>
        </div>
    );
}

export default Header;
