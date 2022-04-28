import { FormEvent, useEffect, useState } from "react";
import style from './ProductsCarousel.module.css'
import ProductType from "../Utils/Product.type";
import ProductItem from "./ProductItem/ProductItem";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { fetchProducts } from "../Utils/ApiClient";

type PropTypes = {
    addToCartHandler: (e: FormEvent) => void
}

const ProductsCarousel = function (props: PropTypes) {
    const [products, setProducts] = useState<ProductType[]>();
    useEffect(() => {
        //Fetch products and set state
        const getProducts = async () => {
            const products = await fetchProducts();
            setProducts(products);
        }
        getProducts();
    }, [])

    const renderProducts = () => {
        //Render products and overwrite drag event for Carousel
        const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();
        if (products) {
            return products.map(product => <ProductItem
                addToCartHandler={props.addToCartHandler}
                key={product.productId}
                product={product}
                handleDragStart={handleDragStart}></ProductItem>)
        }
    }

    //set items per row based on window inner width.
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