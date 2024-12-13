'use client';

import { useEffect, useState } from "react";
import { fetchMovimientos } from "./formtranferencia";
import MovimientosList from "./ListClient";
import TransferenciaForm from "./transferenciaform";

export default function Movimientos() {
  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
    async function loadMovimientos() {
      const data = await fetchMovimientos(); 
      setMovimientos(data);
    }
    loadMovimientos();
  }, []);

  const handleTransferenciaVisual = (nuevaTransferencia) => {
    setMovimientos((prevMovimientos) => [nuevaTransferencia, ...prevMovimientos]);
  };

  return (
    <div className="min-h-screen rounded-lg bg-gray-50 p-6">
      <h1 className="text-4xl font-bold rounded-lg mb-4">Transferencias</h1>

      <div className="mb-6">
        <TransferenciaForm onTransferenciaVisual={handleTransferenciaVisual} />
      </div>
      <h1 className="text-4xl font-bold rounded-lg mb-4">Ultimos movimientos</h1>
      <MovimientosList movimientos={movimientos} />
    </div>
  );
}
