 export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key':'619c4fe85dmsh2deb9e75d4718ddp19398bjsn04b6307c08e9',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,

    });

    const result = await response.json();

    return result;
}