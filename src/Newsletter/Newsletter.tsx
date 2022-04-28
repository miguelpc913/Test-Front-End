import React, { ChangeEvent, useState } from 'react';
import style from './Newsletter.module.css';

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

const newsletterApi = "https://corebiz-test.herokuapp.com/api/v1/newsletter"

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
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    const submitEventHandler = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (state.name.trim().length > 0 && isValidEmail(state.email)) {
            try {
                const response = await postData(newsletterApi, state)
                setState({ name: "", email: "" })
                console.log(response)
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
