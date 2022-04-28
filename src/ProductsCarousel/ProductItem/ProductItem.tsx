import { FormEvent, FormEventHandler } from "react";
import ProductType from "../Product.type";
import style from "./ProductItem.module.css"
import Star from "./Review/Star";

type propTypes = {
    product: ProductType,
    addToCartHandler: (e: FormEvent) => void,
    handleDragStart: (e: React.DragEvent<HTMLDivElement>) => void
}

const ProductItem = function (props: propTypes) {
    const { product } = props;

    const onSale = product.listPrice ? product.listPrice > product.price : false;
    const formatMoney = (money: number) => {
        return "$ " + (money / 100)
    }

    const renderReviewWidget = () => {
        let reviews = []
        for (let index = 0; index < 5; index++) {
            const isActive = index <= product.stars
            reviews.push(<Star active={isActive}></Star>)
        }
        return reviews
    }

    return (
        <div className={style.productCard} onDragStart={props.handleDragStart} >
            <div className={style.productImage}>
                <img src={product.imageUrl}></img>
                {onSale && <div className={style.saleLabel}>OFF</div>}
            </div>
            <div className={style.productDetails}>
                <span className={style.productName}>{product.productName}</span>
                {renderReviewWidget()}
                {product.listPrice && <div className={style.comparePrice}> de {formatMoney(product.listPrice)}</div>}
                <div className={style.productPrice}>Por {formatMoney(product.price)}</div>
                {product.installments.length > 0 &&
                    <div className={style.multipleOffer}>o en {product.installments[0].quantity}x de R {formatMoney(product.installments[0].value)}</div>
                }
                <form action="/cart/add" method="post" onSubmit={props.addToCartHandler}>
                    <button aria-label="Añadir al carrito" name="add" className={style.addToCartBtn}>
                        <span>Add To Cart</span>
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ProductItem;