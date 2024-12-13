"use client"
import { useState } from "react";

export default function LoanForm() {
  const [formData, setFormData] = useState({
    account: "",
    amount: "",
    term: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Aquí podrías enviar los datos a una API o manejarlos según sea necesario
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Solicitud de Préstamo
        </h2>

        <div className="mb-4">
          <label
            htmlFor="account"
            className="block text-gray-600 font-medium mb-2"
          >
            Cuenta
          </label>
          <input
            type="text"
            id="account"
            name="account"
            value={formData.account}
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

        <div className="mb-4">
          <label
            htmlFor="term"
            className="block text-gray-600 font-medium mb-2"
          >
            Plazo (meses)
          </label>
          <input
            type="number"
            id="term"
            name="term"
            value={formData.term}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition"
        >
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
}
