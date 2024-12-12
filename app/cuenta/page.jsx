"use client"
import { useEffect, useState } from "react";
import { fetchCuentas } from "./fetchcuentas";
import CuentasList from "./listcuentas";

export default function Cuenta() {
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    async function loadCuentas() {
      const data = await fetchCuentas();
      setCuentas(data);
    }
    loadCuentas();
  }, []);

  return (
    <div className="min-h-screen rounded-lg bg-gray-50 p-6">
      <h1 className="text-4xl font-bold rounded-lg mb-4">Cuentas</h1>

      {cuentas.length > 0 ? (
        <CuentasList cuentas={cuentas} />
      ) : (
        <p className="text-gray-500 text-center pt-10 text-2xl">Cargando cuentas del cliente...</p>
      )}
    </div>
  );
}