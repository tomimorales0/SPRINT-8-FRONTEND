'use server';

export async function fetchCuentas() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/cuentas/");
    if (!response.ok) {
      throw new Error("Error al obtener las cuentas del cliente");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al cargar cuentas:", error);
    return [];
  }
}