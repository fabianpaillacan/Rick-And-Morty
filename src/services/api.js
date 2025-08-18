const BASE_URL = "https://rickandmortyapi.com/api";

export async function getDatos(page = 1) {
    console.log("Solicitando página:", page);
    const url = `${BASE_URL}/character/?page=${page}`;
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error('Error al obtener datos');
    return respuesta.json();
  }

export async function getLocations(page = 1) {
  const url = `${BASE_URL}/location?page=${page}`;
  const ubicaciones = await fetch(url);
  if (!ubicaciones.ok) throw new Error('Error al obtener datos');
  return ubicaciones.json();
}