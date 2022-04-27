import style from './Cart.module.css'
import { ReactComponent as CartSvg } from '../../assets/cart.svg'

const CartIcon = () => {
    return (
        <div className={style.CartWrapper}>
            <CartSvg></CartSvg>
        </div>
    );
}

export default CartIcon;
