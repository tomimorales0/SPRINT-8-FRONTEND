'use client';
import { useEffect, useState } from "react";
import { fetchCuentas } from "./fetchcuentas";  // Importamos el fetch de datos del cliente
import { fetchSaldo } from "./fetchSaldo";     // Importamos el nuevo fetch para obtener saldo
import ClienteInfo from "./listcuentas";  // Componente que muestra los datos del cliente y saldo
import { fetchPrestamos } from "./fetchPrestamos"; // Nuevo fetch para obtener los préstamos activos

export default function Cuenta() {
  const [cliente, setCliente] = useState({});
  const [saldo, setSaldo] = useState({});
  const [prestamos, setPrestamos] = useState([]); // Estado para almacenar los préstamos

  useEffect(() => {
    async function loadData() {
      const dataCliente = await fetchCuentas();
      setCliente(dataCliente);

      const dataSaldo = await fetchSaldo();
      setSaldo(dataSaldo);

      const dataPrestamos = await fetchPrestamos(); // Obtener los préstamos activos
      setPrestamos(dataPrestamos);
    }

    loadData();
  }, []);

  return (
    <div className="min-h-screen rounded-lg bg-gray-50 p-6">
      <h1 className="text-4xl font-bold rounded-lg mb-4">Datos del Cliente</h1>

      {cliente && saldo ? (
        <ClienteInfo cliente={cliente} saldo={saldo} />  // Pasamos ambos datos al componente
      ) : (
        <p className="text-gray-500 text-center pt-10 text-2xl">Cargando datos...</p>
      )}

      {/* Sección de préstamos activos */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Préstamos Activos</h2>
        {prestamos.length > 0 ? (
          <ul className="list-disc pl-5">
            {prestamos.map((prestamo) => (
              <li key={prestamo.id} className="text-lg text-gray-700 mb-2">
                <strong>Tipo:</strong> {prestamo.tipo_prestamo} - <strong>Monto:</strong> ${prestamo.monto}
                <p><strong>Fecha de Inicio:</strong> {new Date(prestamo.fecha_inicio).toLocaleDateString()}</p> {/* Mostramos la fecha de inicio */}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tienes préstamos activos.</p>
        )}
      </div>
    </div>
  );
}
