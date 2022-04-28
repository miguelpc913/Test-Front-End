import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import Newsletter from './Newsletter/Newsletter'

function App() {
  return (
    <div>
      <Header></Header>
      <HeroCarousel></HeroCarousel>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
