'use client';
import { useState } from "react";

export default function MovimientosList({ movimientos }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formData, setFormData] = useState({ destinatario: "", monto: ""});

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responses = await Promise.all([
        fetch("http://127.0.0.1:8000/api/movimientos-por-cuenta/cuenta_id", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        })]);

      const errors = responses.filter((response) => !response.ok);

      if (errors.length > 0) {
        throw new Error("Error al enviar la transferencia a uno o más endpoints");
      }

      alert("Transferencia enviada con éxito a todos los endpoints");
      setFormData({ destinatario: "", monto: ""});
      setMostrarFormulario(false);
    } catch (error) {
      console.error("Error al enviar la transferencia:", error);
      alert("Hubo un error al enviar la transferencia");
    }
  };

  return (
    <div>
      <button
        onClick={toggleFormulario}
        className="mb-4 px-4 py-2 bg-emerald-600 text-white font-medium rounded hover:bg-emerald-500"
      >
        {mostrarFormulario ? "Ocultar Formulario" : "Nueva Transferencia"}
      </button>

      {mostrarFormulario && (
        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 mb-4">
          <h2 className="text-lg font-medium text-gray-800 mb-2">Nueva Transferencia</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <label className="block text-gray-700">Destinatario</label>
              <input
                type="text"
                name="destinatario"
                value={formData.destinatario}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-emerald-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Monto</label>
              <input
                type="number"
                name="monto"
                value={formData.monto}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-emerald-300"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white font-medium rounded hover:bg-emerald-500"
            >
              Enviar Transferencia
            </button>
          </form>
        </div>
      )}

      {movimientos.length === 0 ? (
        <p className="text-gray-500 text-center">Todavía no tienes transferencias</p>
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