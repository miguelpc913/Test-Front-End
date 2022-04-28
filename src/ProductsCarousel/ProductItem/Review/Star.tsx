import style from './Star.module.css'

type PropTypes = {
    active: boolean
}

const Star = (props: PropTypes) => {
    const activeClass = props.active ? `${style.active}` : ''
    return (
        <div className={`${style.starWrapper} ${activeClass}`} >
        </div >
    );
}

export default Star;
