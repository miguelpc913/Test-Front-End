import style from './Newsletter.module.css';

function Newsletter() {
    return (
        <div className={style.NewsletterWrapper}>
            <h1 className={style.NewsletterTitle}>¡Unete a nuestras novedades y promociones!</h1>
            <form action='/newsletter' method='post' role="newsletter">
                <input type="text" name='Name' className={style.formText} placeholder="Ingresa tu nombre"></input>
                <input type="text" name='Email' className={style.formText} placeholder="Ingresa tu mail"></input>
                <button type="submit" className={style.formSubmit} aria-label="Submit">Suscribirme</button>
            </form>
        </div>
    );
}

export default Newsletter;
