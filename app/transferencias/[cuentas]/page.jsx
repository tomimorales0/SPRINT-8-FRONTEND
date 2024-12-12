"use client"
import { useEffect, useState } from "react";
import { fetchMovimientos } from "./formtranferencia";
import MovimientosList from "./ListClient";

export default function Movimientos({ clienteId }) {
  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
    async function loadMovimientos() {
      const data = await fetchMovimientos(clienteId);
      setMovimientos(data);
    }
    loadMovimientos();
  }, [clienteId]);

  return (
    <div className="min-h-screen rounded-lg bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-4">Transferencias</h1>

      <MovimientosList movimientos={movimientos} />
    </div>
  );
}