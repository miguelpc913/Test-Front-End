import style from './Cart.module.css'
import { ReactComponent as CartSvg } from '../../assets/cart.svg'

type PropTypes = {
    cartItems: number
}

const CartIcon = (props: PropTypes) => {
    console.log(props)
    return (
        <div className={style.CartWrapper}>
            <CartSvg></CartSvg>
            {props.cartItems > 0 ? <div className={style.cartCount}>{props.cartItems}</div> : null}
        </div>
    );
}

export default CartIcon;
