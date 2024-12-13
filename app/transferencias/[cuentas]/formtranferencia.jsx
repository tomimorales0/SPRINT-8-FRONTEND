"use server"
export async function fetchMovimientos(cuentaId) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/movimientos-por-cuenta?cuentaId=${cuentaId}`);
    if (!response.ok) {
      throw new Error("Error al obtener los movimientos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al fetchear movimientos:", error);
    return [];
  }
}