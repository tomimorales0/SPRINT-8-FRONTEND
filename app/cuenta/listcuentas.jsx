'use client';

export default function ClienteInfo({ cliente }) {
  return (
    <div className="grid gap-4">
      <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
        <p className="text-lg text-gray-800">
          <span className="font-medium">Nombre:</span> {cliente.nombre}
        </p>
        <p className="text-lg text-gray-800">
          <span className="font-medium">Apellido:</span> {cliente.apellido}
        </p>
        <p className="text-lg text-gray-800">
          <span className="font-medium">DNI:</span> {cliente.DNI}
        </p>
        <p className="text-lg text-gray-800">
          <span className="font-medium">Tipo de cliente:</span> {cliente.tipo}
        </p>
        <p className="text-lg text-gray-800">
          <span className="font-medium">Sucursal:</span> {cliente.sucursal}
        </p>
      </div>
    </div>
  );
}
