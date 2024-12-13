"use client"
import { useState } from 'react';
import axios from 'axios';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('ARS');
  
  const handleConvert = async (event) => {
    event.preventDefault();

    // Validar que el monto sea válido
    if (!amount || isNaN(amount)) {
      alert('Por favor, ingresa un monto válido.');
      return;
    }

    // Realizar la conversión
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const rate = response.data.rates[toCurrency];
      const result = amount * rate;
      setConvertedAmount(result.toFixed(2));
    } catch (error) {
      console.error('Error al obtener la tasa de cambio:', error);
      alert('No se pudo obtener la tasa de cambio.');
    }
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Convertidor de Monedas</h1>

        {/* Monto de la conversión */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Monto</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Moneda base */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">De</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">Dólar</option>
            <option value="ARS">Peso</option>
            <option value="EUR">Euro</option>
            {/* Agrega más monedas según sea necesario */}
          </select>
        </div>

        {/* Moneda receptora */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">A</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="ARS">Peso</option>
            <option value="USD">Dólar</option>
            <option value="EUR">Euro</option>
            {/* Agrega más monedas según sea necesario */}
          </select>
        </div>

        {/* Botón de conversión */}
        <button
          onClick={handleConvert}
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none"
        >
          Convertir
        </button>

        {/* Mostrar el resultado */}
        {convertedAmount !== null && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">Resultado de la conversión:</p>
            <p className="text-xl font-bold text-emerald-600">{convertedAmount} {toCurrency}</p>
          </div>
        )}
      </div>
    </div>
  );
}
