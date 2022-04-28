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
        title: "¡Hola! ¿Qué es lo que buscas? ¡Hola! ¿Qué es lo que buscas? Crear o migrar tu comercio electrónico?"
    },
    {
        id: 2,
        src: secondThumbnail,
        title: "¡Se un guru de ventas!"
    },
    {
        id: 3,
        src: thirdThumbnail,
        title: "¡Mejora tu contacto con tus clientes!"
    }, {
        id: 4,
        src: fourthThumbnail,
        title: "¡Potencia tus ventas!"
    }
]

const getImageData = () => imageData;


export default getImageData;