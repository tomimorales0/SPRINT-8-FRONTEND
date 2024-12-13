"use client"
import { useState } from 'react';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [conversionType, setConversionType] = useState('toDollar');
  const exchangeRate = 1080; 

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      alert('Por favor, ingresa un monto válido.');
      return;
    }

    if (conversionType === 'toDollar') {
      setConvertedAmount((amount / exchangeRate).toFixed(2));
    } else {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 mx-w">
        <h1 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Convertidor de Monedas
        </h1>
        <input
          type="text"
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:ring-emerald-200"
        />
        <select
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:ring-emerald-200"
        >
          <option value="toDollar">De Peso a Dólar</option>
          <option value="toPeso">De Dólar a Peso</option>
        </select>
        <button
          onClick={handleConvert}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition"
        >
          Convertir
        </button>
        {convertedAmount && (
          <p className="mt-4 text-center text-gray-700">
            Monto convertido: <span className="font-bold">{convertedAmount}</span>
          </p>
        )}
      </div>
    </div>
  );
}