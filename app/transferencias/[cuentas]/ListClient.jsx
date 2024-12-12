'use client';
import { useState } from "react";

export default function MovimientosList({ movimientos }) {
  return (
    <div>
      {movimientos.length === 0 ? (
        <p className="text-gray-500 text-center py-10 text-2xl">Todavía no tienes transferencias.</p>
      ) : (
        <div className="grid gap-4">
          {movimientos.map((movimiento) => (
            <div
              key={movimiento.id}
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <p className="text-lg text-gray-800">
                <span className="font-medium">Tipo:</span> {movimiento.tipo}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Monto:</span> ${movimiento.monto}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Fecha:</span> {movimiento.fecha}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Descripción:</span> {movimiento.descripcion}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
