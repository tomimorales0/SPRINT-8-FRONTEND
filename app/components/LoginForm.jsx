'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Codificar credenciales en Base64 para Basic Auth
    const credentials = btoa(`${username}:${password}`);
    const headers = {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    };

    try {
      // Verificación de login con Basic Auth
      const response = await fetch('http://127.0.0.1:8000/api/verify-login/', {
        method: 'POST',
        headers: headers,
      });

      if (response.ok) {
        // Guardar las credenciales en localStorage
        const credentialsObject = { username, password };
        localStorage.setItem('auth_credentials', JSON.stringify(credentialsObject));

        // Obtener el token desde la API de generación
        const tokenResponse = await fetch('http://127.0.0.1:8000/api/token/', {
          method: 'POST',
          headers: headers,
        });

        if (tokenResponse.ok) {
          const tokenData = await tokenResponse.json();
          const token = tokenData.token;

          // Guardar el token en cookies
          Cookies.set('auth-token', token, { path: '/', secure: true, sameSite: 'strict' });

          // Redirigir al usuario
          router.push('/'); // Redirige a la página principal
        } else {
          setError('Error al generar el token. Por favor, inténtalo de nuevo.');
        }
      } else {
        const data = await response.json();
        setError(data.detail || 'Credenciales inválidas. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      setError('Hubo un error al intentar iniciar sesión. Inténtalo nuevamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Iniciar Sesión</h2>

      <label htmlFor="username" className="mb-2 text-gray-700">Nombre de Usuario:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        placeholder="Ingrese su nombre de usuario"
        className="p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />

      <label htmlFor="password" className="mb-2 text-gray-700">Contraseña:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Ingrese su contraseña"
        className="p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
