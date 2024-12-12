"use client"
import { useEffect, useState } from "react";
import { fetchMovimientos } from "./formtranferencia";
import MovimientosList from "./ListClient";
import TransferenciaForm from "./transferenciaform";

export default function Movimientos({ clienteId }) {
  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
    async function loadMovimientos() {
      const data = await fetchMovimientos(clienteId);
      setMovimientos(data);
    }
    loadMovimientos();
  }, [clienteId]);

  const handleTransferenciaVisual = (nuevaTransferencia) => {
    setMovimientos((prevMovimientos) => [nuevaTransferencia, ...prevMovimientos]);
  };

  return (
    <div className="min-h-screen rounded-lg bg-gray-50 p-6">
      <h1 className="text-4xl font-bold rounded-lg mb-4">Transferencias</h1>

      <div className="mb-6">
        <TransferenciaForm onTransferenciaVisual={handleTransferenciaVisual} />
      </div>

      <MovimientosList movimientos={movimientos} />
    </div>
  );
}
