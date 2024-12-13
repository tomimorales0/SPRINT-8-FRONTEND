'use client';

export async function fetchMovimientos() {
  try {
    if (typeof window !== 'undefined') {
      // Obtener las credenciales del localStorage
      const credentials = JSON.parse(localStorage.getItem('auth_credentials'));

      if (!credentials) {
        console.error('No se encontraron credenciales en localStorage');
        return [];
      }

      // Codificar las credenciales en Base64 para Basic Auth
      const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);

      const headers = {
        'Authorization': `Basic ${encodedCredentials}`,
        'Content-Type': 'application/json',
      };

      // Realizar la solicitud GET al endpoint
      const response = await fetch("http://127.0.0.1:8000/api/movimientos/", {
        method: 'GET',
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`Error al obtener los movimientos: ${response.statusText}`);
      }

      const data = await response.json();

      // Transformar los datos para incluir los campos requeridos
      return data.map((movimiento) => ({
        tipo: movimiento.tipo_movimiento,
        fecha: movimiento.fecha,
        monto: movimiento.monto,
        de: movimiento.cuenta,
        hacia: movimiento.destinatario || "No especificado",
      }));
    } else {
      console.error('El código no se ejecuta en el cliente');
      return [];
    }
  } catch (error) {
    console.error('Error al obtener movimientos:', error);
    return [];
  }
}
