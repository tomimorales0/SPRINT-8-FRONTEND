"use client"
import { useState } from 'react';

export default function Simulacion() {
  const [capital, setCapital] = useState(0);
  const [rate, setRate] = useState(0);
  const [days, setDays] = useState(0);
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    const annualInterest = (capital * rate) / 100;
    const dailyInterest = annualInterest / 365;
    const totalInterest = dailyInterest * days;
    setResult(capital + totalInterest);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Simulador de Plazo Fijo</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Capital inicial (en pesos)</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={capital}
            onChange={(e) => setCapital(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tasa de interés anual (%)</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Plazo (en días)</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />
        </div>
        <button
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none"
          onClick={calculateInterest}
        >
          Calcular
        </button>
        {result !== null && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">Monto total al vencimiento:</p>
            <p className="text-xl font-bold text-emerald-600">${result.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
