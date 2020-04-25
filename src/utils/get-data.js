const API = 'https://rickandmortyapi.com/api/character/';

export default async function getData(id) {
  const API_URL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error: ', error);
  }
}
