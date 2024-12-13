// fetchPrestamos.js

'use client';

export async function fetchPrestamos() {
  try {
    if (typeof window !== 'undefined') {
      const credentials = JSON.parse(localStorage.getItem('auth_credentials'));

      if (!credentials) {
        console.error('No se encontraron credenciales en localStorage');
        return [];
      }

      // Codificamos las credenciales en base64 para Basic Auth
      const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);

      const headers = {
        'Authorization': `Basic ${encodedCredentials}`,
        'Content-Type': 'application/json',
      };

      // Hacemos la solicitud GET al endpoint para obtener los préstamos activos
      const response = await fetch("http://127.0.0.1:8000/api/cliente/prestamos/", {
        method: 'GET',
        headers: headers,
      });

      if (response.status === 404) {
        throw new Error("Endpoint no encontrado (404). Verifica la URL del servidor.");
      }

      if (!response.ok) {
        throw new Error(`Error al obtener los préstamos activos: ${response.statusText}`);
      }

      const data = await response.json();
      return data;  // Devuelve los préstamos activos
    } else {
      console.error('El código no se ejecuta en el cliente');
      return [];
    }
  } catch (error) {
    console.error("Error al cargar los datos de los préstamos:", error);
    return [];
  }
}
