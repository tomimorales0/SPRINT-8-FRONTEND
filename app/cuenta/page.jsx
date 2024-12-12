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
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold text-emerald-600 mb-4">Cuentas del Cliente</h1>

      {cuentas.length > 0 ? (
        <CuentasList cuentas={cuentas} />
      ) : (
        <p className="text-gray-500">Cargando cuentas del cliente...</p>
      )}
    </div>
  );
}