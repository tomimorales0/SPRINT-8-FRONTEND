'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Obtén los valores del formulario
    const username = e.target.username.value;
    const password = e.target.password.value;

    const userData = { username, password };

    try {
        // Enviar los datos al endpoint de registro
        const response = await fetch('http://localhost:8000/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });

        // Verifica si la respuesta fue exitosa
        const data = await response.json();

        if (response.ok) {
            console.log('Usuario registrado:', data.message);

            // Almacena el username y password en localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            // Mostrar mensaje de éxito
            setSuccessMessage('Usuario registrado exitosamente!');
        } else {
            // Si la respuesta no es exitosa, muestra el error
            console.error('Error:', data.detail || 'Hubo un error');
            setErrorMessage(data.detail || 'Hubo un error al registrar el usuario.');
        }
    } catch (error) {
        console.error('Error al registrar:', error);
        setErrorMessage('Error en la conexión con el servidor.');
    }
};

  return (
    <form onSubmit={handleRegister} className="flex flex-col max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl mb-4">Ingrese sus datos aquí</h2>
      
      <label htmlFor="email" className="mb-2">Nombre:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.username.value)}
        required
        className="p-2 mb-4 border border-gray-300 rounded"
      />

      <label htmlFor="password" className="mb-2">Contraseña:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.password.value)}
        required
        className="p-2 mb-4 border border-gray-300 rounded"
      />

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
