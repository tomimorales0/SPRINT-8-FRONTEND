'use client';

export default function ClienteInfo({ cliente, saldo }) {
  return (
    <div className="grid gap-4">
    
      <div className="p-6 mt-4 rounded-lg">
        <p className="text-5xl text-green-400 font-bold mt-2">
          Saldo: ${saldo.saldo}
        </p>
        <p className="text-2xl text-black-600 font-bold">
          Tu cuenta número: {saldo.numero_cuenta}
        </p>
      </div>

      <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
        <p className="text-xl text-gray-800">
          <span className="font-medium">Nombre:</span> {cliente.nombre}
        </p>
        <p className="text-xl text-gray-800">
          <span className="font-medium">Apellido:</span> {cliente.apellido}
        </p>
        <p className="text-xl text-gray-800">
          <span className="font-medium">DNI:</span> {cliente.DNI}
        </p>
        <p className="text-xl text-gray-800">
          <span className="font-medium">Tipo de cliente:</span> {cliente.tipo}
        </p>
        <p className="text-xl text-gray-800">
          <span className="font-medium">Sucursal:</span> {cliente.sucursal}
        </p>
      </div>
    </div>
  );
}
