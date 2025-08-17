const URL = "https://rickandmortyapi.com/api/character/?page=1"; //puede ser page=1, 2,3,4,5,6 etc
const LOCATION = "https://rickandmortyapi.com/api/location?page=1";


export async function getDatos() {
    const respuesta = await fetch(URL);
    if (!respuesta.ok) throw new Error('Error al obtener datos');
    return respuesta.json();
  }

export async function getLocations() {
  const ubicaciones = await fetch(LOCATION);
  if (!ubicaciones.ok) throw new Error('Error al obtener datos');
  return ubicaciones.json();
}