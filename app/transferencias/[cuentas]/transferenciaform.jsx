'use client';

import { useState } from "react";

export default function TransferenciaForm({ onTransferenciaVisual }) {
  const [formData, setFormData] = useState({ destinatario: "", monto: "", descripcion: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTransferencia = {
      id: Date.now(),
      tipo: "Salida",
      monto: formData.monto,
      fecha: new Date().toLocaleDateString(),
      descripcion: formData.descripcion,
      hacia: formData.destinatario,
    };
    onTransferenciaVisual(nuevaTransferencia);
    setFormData({ destinatario: "", monto: "", descripcion: "" });
    alert("Transferencia agregada visualmente");
  };

  return (
    <form className="bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold text-emerald-600 mb-4">Nueva Transferencia</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Destinatario</label>
        <input
          type="text"
          name="destinatario"
          value={formData.destinatario}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Monto</label>
        <input
          type="number"
          name="monto"
          value={formData.monto}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700"
      >
        Transferir
      </button>
    </form>
  );
}
