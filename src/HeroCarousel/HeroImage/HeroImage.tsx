import { image } from '../ImagesData'
import { slideTo } from '../HeroCarousel'
import style from './HeroImage.module.css'
import parse from 'html-react-parser';

type propTypes = {
    image: image,
    isActive: boolean,
    isLeft: boolean,
    slideTo: slideTo
}

function HeroImage(props: propTypes) {
    const containerStyle = props.isActive ? `${style.imageContainer} ${style.activeImage}` : `${style.imageContainer}`
    let directionClass = ''
    let slideToClass = '';
    if (!props.isActive) {
        directionClass = props.isLeft ? ` ${style.leftContainer}` : ` ${style.rightContainer}`
    } else {
        slideToClass = props.slideTo === "right" ? ` ${style.slideToRight}` : ` ${style.slideToLeft}`
    }

    return (
        <div className={containerStyle + directionClass + slideToClass}>
            <img src={props.image.src} className={style.image} />
            <div className={style.HeroTitleWrapper}>
                <div className={style.HeroTitle}>
                    {parse(props.image.title)}
                </div>
                <div className={style.CustomShapeDivider} >
                </div>
            </div>
        </div >
    );
}

export default HeroImage;
