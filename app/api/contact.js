export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      res.status(200).json({ message: 'Mensaje recibido' });
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  