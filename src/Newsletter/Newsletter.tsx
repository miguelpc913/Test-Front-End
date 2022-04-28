import React, { ChangeEvent, useState } from 'react';
import { postNewsLetter } from '../Utils/ApiClient';
import style from './Newsletter.module.css';

type State = {
    name: string,
    email: string
}

function Newsletter() {
    const [state, setState] = useState<State>({ name: "", email: "" });

    const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => {
            return { name: prevState.name, email: e.target.value }
        })
    }

    const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => {
            return { name: e.target.value, email: prevState.email }
        })
    }

    const isValidEmail = (mail: string) => {
        //Use regex to check if email is valid
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    const submitEventHandler = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        //We check if email is valid and if name is not empty
        if (state.name.trim().length > 0 && isValidEmail(state.email)) {
            try {
                const response = await postNewsLetter(state)
                setState({ name: "", email: "" })
                alert("Gracias!")
            } catch (e) {
                alert(e);
            }
        } else {
            alert("Nombre o mail invalidos")
        }
    }

    return (
        <div className={style.NewsletterWrapper} onSubmit={submitEventHandler}>
            <h1 className={style.NewsletterTitle}>¡Unete a nuestras novedades y promociones!</h1>
            <form action='/newsletter' method='post' role="newsletter">
                <input value={state.name} onChange={nameChangeHandler} type="text" name='name' className={style.formText} placeholder="Ingresa tu nombre"></input>
                <input value={state.email} onChange={emailChangeHandler} type="text" name='email' className={style.formText} placeholder="Ingresa tu mail"></input>
                <button type="submit" className={style.formSubmit} aria-label="Submit">Suscribirme</button>
            </form>
        </div>
    );
}

export default Newsletter;
