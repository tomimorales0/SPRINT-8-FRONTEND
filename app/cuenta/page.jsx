"use client";
import { useEffect, useState } from "react";
import { fetchCuentas } from "./fetchcuentas";  
import ClienteInfo from "./listcuentas"; 

export default function Cuenta() {
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    async function loadCliente() {
      const data = await fetchCuentas();
      setCliente(data);  // Ahora estamos configurando los datos del cliente
    }
    loadCliente();
  }, []);

  return (
    <div className="min-h-screen rounded-lg bg-gray-50 p-6">
      <h1 className="text-4xl font-bold rounded-lg mb-4">Datos del Cliente</h1>

      {cliente ? (
        <ClienteInfo cliente={cliente} />
      ) : (
        <p className="text-gray-500 text-center pt-10 text-2xl">Cargando datos del cliente...</p>
      )}
    </div>
  );
}
