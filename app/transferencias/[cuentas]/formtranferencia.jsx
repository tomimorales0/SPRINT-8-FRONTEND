'use server';

export async function fetchMovimientos(clienteId) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/movimientos?clienteId=${clienteId}`);
    if (!response.ok) {
      throw new Error("Error al obtener los movimientos del cliente");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al cargar movimientos:", error);
    return [];
  }
}