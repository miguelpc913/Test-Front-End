import style from './Location.module.css';


function Location() {
    return (
        <div className={style.Location}>
            <div className={style.LocationTitle}>
                <h3>Ubicacion</h3>
            </div>
            <ul>
                <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
                <li>Alphavile SP</li>
                <li>brasil@corebiz.ag</li>
                <li>+55 11 3090 1039</li>
            </ul>
        </div>
    );
}

export default Location;
