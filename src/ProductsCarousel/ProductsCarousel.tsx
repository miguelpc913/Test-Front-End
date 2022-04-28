import { FormEvent, useEffect, useState } from "react";
import style from './ProductsCarousel.module.css'
import ProductType from "./Product.type";
import ProductItem from "./ProductItem/ProductItem";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const productsApi = 'https://corebiz-test.herokuapp.com/api/v1/products'

type PropTypes = {
    addToCartHandler: (e: FormEvent) => void
}

const ProductsCarousel = function (props: PropTypes) {

    const [products, setProducts] = useState<ProductType[]>();
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(productsApi);
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    }, [])

    const renderProducts = () => {
        const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();
        if (products) {
            return products.map(product => <ProductItem
                addToCartHandler={props.addToCartHandler}
                key={product.productId}
                product={product}
                handleDragStart={handleDragStart}></ProductItem>)
        }
    }
    const responsive = {
        0: {
            items: 2,
        },
        1024: {
            items: 4,
        }
    }

    return (
        <div className={style.ProductsCarouselWrapper}>
            <AliceCarousel responsive={responsive} mouseTracking items={renderProducts()} />
        </div>
    )
}

export default ProductsCarousel;