"use client";
import { useEffect, useState } from "react";
import { fetchCuentas } from "./fetchcuentas";  // Importamos el fetch de datos del cliente
import { fetchSaldo } from "./fetchSaldo";     // Importamos el nuevo fetch para obtener saldo
import ClienteInfo from "./listcuentas";  // Componente que muestra los datos del cliente y saldo

export default function Cuenta() {
  const [cliente, setCliente] = useState({});
  const [saldo, setSaldo] = useState({});

  useEffect(() => {
    async function loadData() {
      
      const dataCliente = await fetchCuentas();
      setCliente(dataCliente);

      
      const dataSaldo = await fetchSaldo();
      setSaldo(dataSaldo);
    }

    loadData();
  }, []);

  return (
    <div className="min-h-screen rounded-lg bg-gray-50 p-6">
      <h1 className="text-4xl font-bold rounded-lg mb-4">Datos del Cliente</h1>

      {cliente && saldo ? (
        <ClienteInfo cliente={cliente} saldo={saldo} />  // Pasamos ambos datos al componente
      ) : (
        <p className="text-gray-500 text-center pt-10 text-2xl">Cargando datos...</p>
      )}
    </div>
  );
}
