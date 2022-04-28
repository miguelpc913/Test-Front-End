import style from './Header.module.css';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';
import CartIcon from './Cart/Cart';
import SearchBar from './SearchBar/SearchBar';
import Account from './Account/Account'

type PropTypes = {
    cartItems: number
}

function Header(props: PropTypes) {
    return (
        <header className={style.Header}>
            <Hamburger></Hamburger>
            <Logo></Logo>
            <CartIcon cartItems={props.cartItems}></CartIcon>
            <SearchBar></SearchBar>
            <Account></Account>
        </header >
    );
}

export default Header;
