//Post method with fetch
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

//Get products
const productsApi = 'https://corebiz-test.herokuapp.com/api/v1/products'
export const fetchProducts = async () => {
    const response = await fetch(productsApi);
    const data = await response.json();
    return data;
}

//Post newsLetter
const newsletterApi = "https://corebiz-test.herokuapp.com/api/v1/newsletter"
export const postNewsLetter = async (state: { name: string, email: string }) => {
    await postData(newsletterApi, state)
}