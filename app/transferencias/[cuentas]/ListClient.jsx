'use client';

function formatFecha(fecha) {
  const opciones = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', opciones);
  return fechaFormateada;
}

export default function MovimientosList({ movimientos }) {
  return (
    <div>
      {movimientos.length === 0 ? (
        <p className="text-gray-500 text-center py-10 text-2xl">Todavía no tienes transferencias.</p>
      ) : (
        <div className="grid gap-4">
          {movimientos.map((movimiento, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <p className="text-lg text-gray-800">
                <span className="font-medium">De:</span> {movimiento.de}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Hacia:</span> {movimiento.hacia}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Monto:</span> ${movimiento.monto}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Tipo:</span> {movimiento.tipo}
              </p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Fecha:</span> {formatFecha(movimiento.fecha)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
