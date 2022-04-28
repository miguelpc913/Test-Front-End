import style from './HeroCarousel.module.css';
import getImageData from '../Utils/HeroImagesData'
import { useState } from 'react';
import HeroImage from './HeroImage/HeroImage';

export type slideTo = 'right' | 'left' | '';

type heroState = {
    activeIndex: number,
    slideTo: slideTo
}

function HeroCarousel() {
    const [images] = useState(getImageData());
    let [state, setState] = useState<heroState>({
        activeIndex: 0, slideTo: ''
    });

    const renderCarouselImages = () => {
        const carouselImages = images.map((image, index) => {
            //If index is equal to the activedIndex then the image is active
            const isActive = index === state.activeIndex;
            //If the index that is active is bigger than index slide to left
            const isLeft = state.activeIndex > index;
            return <HeroImage image={image} key={image.id} isActive={isActive} isLeft={isLeft} slideTo={state.slideTo}></HeroImage>
        })
        return carouselImages;
    }

    const renderCarouselButton = () => {
        const renderCarouselButtons = images.map((image, index) => {
            // Button is active if the active index matches the index of the button
            const activeClass = index === state.activeIndex ? style.ActiveButton : ""
            return <button className={` ${activeClass} ${style.CarouselBtn}`} key={image.id} onClick={() => setActiveImage(index)}></button>
        })
        return renderCarouselButtons;
    }

    const setActiveImage = (index: number) => {
        if (index !== state.activeIndex) {
            // Set direction based on the current active index, if is bigger then we are "sliding" left, otherwise we are sliding right 
            const direction: slideTo = state.activeIndex > index ? "left" : "right";
            setState({
                activeIndex: index,
                slideTo: direction
            })
        }
    }

    return (
        <div className={style.CarouselContainer}>
            <div className={style.ButtonContainer}>
                {renderCarouselButton()}
            </div>
            <div className={style.ImagesContainer}>
                {renderCarouselImages()}
            </div>
        </div>
    );
}

export default HeroCarousel;
