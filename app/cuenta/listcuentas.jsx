'use client';

export default function CuentasList({ cuentas }) {
  return (
    <div className="grid gap-4">
      {cuentas.map((cuenta) => (
        <div
          key={cuenta.id}
          className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
        >
          <p className="text-lg text-gray-800">
            <span className="font-medium">Tipo de cuenta:</span> {cuenta.tipo}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-medium">Número de cuenta:</span> {cuenta.numero}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-medium">Saldo:</span> ${cuenta.saldo}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-medium">Cliente:</span> {cuenta.cliente}
          </p>
        </div>
      ))}
    </div>
  );
}