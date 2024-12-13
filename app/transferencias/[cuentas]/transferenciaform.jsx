import { useState } from "react";
import Swal from "sweetalert2"; // Importar SweetAlert2

export default function TransferenciaForm({ onTransferenciaVisual }) {
  const [formData, setFormData] = useState({ destinatario: "", monto: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Datos que se enviarán al backend
    const nuevaTransferencia = {
      destinatario_id: formData.destinatario, // ID del destinatario
      monto: formData.monto, // Monto de la transferencia
    };

    // Obtener las credenciales del localStorage
    const credentials = JSON.parse(localStorage.getItem("auth_credentials"));

    if (!credentials) {
      console.error("No se encontraron credenciales en localStorage");
      return;
    }

    // Codificar las credenciales en base64 para Basic Auth
    const encodedCredentials = btoa(
      `${credentials.username}:${credentials.password}`
    );

    // Hacer la solicitud POST con los encabezados de autenticación
    fetch("http://127.0.0.1:8000/api/transferir/", {
      method: "POST",
      headers: {
        Authorization: `Basic ${encodedCredentials}`, // Autenticación Basic
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaTransferencia), // Enviar los datos de la transferencia al backend
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          onTransferenciaVisual(data.message); // Actualizar la interfaz con el mensaje de éxito
          setFormData({ destinatario: "", monto: "" }); // Resetear el formulario

          
          Swal.fire({
            icon: "success",
            title: "Transferencia realizada con éxito",
            text: data.message,
            confirmButtonColor: "#22c55e", 
          });
        } else {
          alert("Error: " + data.error); // Mostrar el error si ocurre
        }
      })
      .catch((error) => {
        console.error("Error al realizar la transferencia", error); // Capturar errores en la petición
      });
  };

  return (
    <form className="bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold text-emerald-600 mb-4">
        Nueva Transferencia
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Destinatario (ID)
        </label>
        <input
          type="number"
          name="destinatario"
          value={formData.destinatario}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Monto</label>
        <input
          type="number"
          name="monto"
          value={formData.monto}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700"
      >
        Transferir
      </button>
    </form>
  );
}
