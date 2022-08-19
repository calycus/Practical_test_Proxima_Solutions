
/////////
// Función encargada de retornar un objeto el cual almacena las variables URL y HEADERS para el proceso de consumo de la API.
const API = () => {
    let api = {
        url: "https://webhook.site/04b12921-3072-4fe9-8d60-9f4394e109d9",
        headers: {
            'Accept-Version': 1,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'X-Requested-With': 'XMLHttpRequest'
        },
    }
    return api
}

export default API