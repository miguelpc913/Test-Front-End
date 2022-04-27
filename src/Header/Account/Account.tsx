import style from './Account.module.css'
import account from '../../assets/account.png'

const CartIcon = () => {
    return (
        <div className={style.AccountWrapper}>
            <img src={account} className={style.LogoImage}></img>
            <span>Mi cuenta</span>
        </div>
    );
}

export default CartIcon;
