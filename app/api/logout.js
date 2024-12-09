
export default function handler(req, res) {
    if (req.method === 'POST') {
     
      res.setHeader('Set-Cookie', 'auth-token=; Max-Age=0; path=/');
      return res.status(200).json({ message: 'Cierre de sesión exitoso' });
    } else {
      return res.status(405).json({ message: 'Método no permitido' });
    }
  }
  