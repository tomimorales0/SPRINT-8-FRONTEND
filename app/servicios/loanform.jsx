"use client";
import { useState } from "react";
import Swal from "sweetalert2"; // Importar SweetAlert2

export default function LoanForm() {
  const [formData, setFormData] = useState({
    clientId: "", // El ID del cliente que será ingresado por el usuario
    amount: "", // Monto del préstamo
    loanType: "", // Tipo de préstamo
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtener clientId manualmente del formulario
    const clientId = formData.clientId;

    // Validar que el clientId esté presente
    if (!clientId) {
      alert("Por favor ingresa tu ID de cliente.");
      return;
    }

    // Generar la fecha actual
    const currentDate = new Date().toISOString().split("T")[0]; // Solo la fecha

    try {
      const storedData = JSON.parse(localStorage.getItem("auth_credentials"));
      const encodedCredentials = btoa(`${storedData.username}:${storedData.password}`);

      // Construir el JSON del préstamo
      const loanData = {
        cliente: clientId, // ID del cliente ingresado manualmente
        tipo_prestamo: formData.loanType, // Tipo de préstamo
        fecha_inicio: currentDate, // Fecha actual
        monto: parseFloat(formData.amount), // Convertir el monto a número flotante
      };

      const response = await fetch("http://127.0.0.1:8000/api/prestamos/", {
        method: "POST",
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loanData),
      });

      if (!response.ok) {
        throw new Error(`Error al enviar solicitud: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Solicitud exitosa:", data);

      // Mostrar SweetAlert en caso de éxito
      Swal.fire({
        icon: 'success',
        title: 'Préstamo solicitado con éxito',
        text: 'Tu solicitud ha sido procesada correctamente.',
        confirmButtonText: 'OK',
      }).then(() => {
        // Resetear el formulario
        setFormData({
          clientId: "",
          amount: "",
          loanType: "",
        });
      });
    } catch (error) {
      console.error("Error al enviar solicitud:", error);
      alert("Hubo un error al procesar la solicitud.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Solicitud de Préstamo
        </h2>

        <div className="mb-4">
          <label
            htmlFor="clientId"
            className="block text-gray-600 font-medium mb-2"
          >
            ID de Cliente
          </label>
          <input
            type="text"
            id="clientId"
            name="clientId"
            value={formData.clientId}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="loanType"
            className="block text-gray-600 font-medium mb-2"
          >
            Tipo de Préstamo
          </label>
          <input
            type="text"
            id="loanType"
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-600 font-medium mb-2"
          >
            Monto del Préstamo
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition"
        >
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
}
