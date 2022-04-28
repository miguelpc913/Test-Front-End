import { Key } from 'react';
import firstThumbnail from '../assets/ecommerce-thumbnail.jpg'
import secondThumbnail from '../assets/ecommerce-thumbnail2.webp'
import thirdThumbnail from '../assets/ecommerce-thumbnail3.webp'
import fourthThumbnail from '../assets/ecommerce-thumbnail4.webp'

export type image = {
    id: Key,
    src: string,
    title: string
};

const imageData: image[] = [
    {
        id: 1,
        src: firstThumbnail,
        title: "<span>¡Hola! ¿Qué es lo que buscas?</span> <h1>Crear o migrar tu comercio electrónico?</h1>"
    },
    {
        id: 2,
        src: secondThumbnail,
        title: "<h1>¡Se un guru de ventas!</h1>"
    },
    {
        id: 3,
        src: thirdThumbnail,
        title: "<h1>¡Mejora tu contacto con tus clientes!</h1>"
    }, {
        id: 4,
        src: fourthThumbnail,
        title: "<h1>¡Potencia tus ventas!</h1>"
    }
]

const getImageData = () => imageData;


export default getImageData;