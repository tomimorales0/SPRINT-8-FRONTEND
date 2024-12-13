'use client';

export default function MovimientosList({ movimientos }) {
  return (
    <div>
      {movimientos.length === 0 ? (
        <p className="text-gray-500 text-center py-10 text-2xl">Todavía no tienes transferencias.</p>
      ) : (
        <div className="grid gap-4">
          {movimientos.map((movimiento, index) => (
            <div
              key={index} // Cambiado de `movimiento.id` porque no hay garantía de que todos tengan `id`
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <p className="text-lg text-gray-800">
                <span className="font-medium">De:</span> {movimiento.de}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Hacia:</span> {movimiento.hacia}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Tipo:</span> {movimiento.tipo}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Fecha:</span> {movimiento.fecha}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
