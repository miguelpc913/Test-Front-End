import { FormEvent, useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import Newsletter from './Newsletter/Newsletter'
import ProductsCarousel from './ProductsCarousel/ProductsCarousel';

function App() {
  //Get local storage of cart item, if it doesn't exist set 0
  const localStoredCart = localStorage.getItem("cart");
  const stringIsParsableNumber = (value: string) => !isNaN(parseInt(value))
  const initialCartExists = localStoredCart !== null && stringIsParsableNumber(localStoredCart)
  const initialCartItems = initialCartExists ? parseInt(localStoredCart) : 0
  const [cartItems, setCartItems] = useState<number>(initialCartItems)

  const addToCartHandler = (e: FormEvent) => {
    e.preventDefault();
    //Update cart item based on cart if is added
    const cart = localStorage.getItem("cart");
    if (cart) {
      const newCartValue = parseInt(cart) + 1;
      localStorage.setItem("cart", newCartValue.toString());
    } else {
      localStorage.setItem("cart", "1");
    }

    const cartUpdated = localStorage.getItem("cart");
    if (cartUpdated) {
      setCartItems(parseInt(cartUpdated))
    }
  }

  return (
    <div>
      <Header cartItems={cartItems}></Header>
      <HeroCarousel></HeroCarousel>
      <ProductsCarousel addToCartHandler={addToCartHandler}></ProductsCarousel>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
