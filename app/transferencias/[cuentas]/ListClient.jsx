
import { useState, useEffect } from "react";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClientes() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/clientes",
        
        );
        if (!response.ok) {
          throw new Error("Error al obtener los clientes");
        }
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchClientes();
  }, []);

  if (loading) return <p className="text-gray-500">Cargando clientes...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold text-emerald-600 mb-4">Lista de Clientes</h1>
      <div className="grid gap-4">
        {clientes.map((cliente) => (
          <div
            key={cliente.id}
            className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg"
          >
            <div>
              <h2 className="text-lg font-medium text-gray-800">{cliente.name}</h2>
              <p className="text-sm text-gray-500">{cliente.email}</p>
            </div>
            <button
              onClick={() => alert(`Transferencia iniciada con ${cliente.name}`)}
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Transferir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
