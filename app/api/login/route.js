export async function POST(req) {
    const { email, password } = await req.json();
  
    // Lista de usuarios y contraseñas válidos
    const validUsers = [
      { email: 'user1@example.com', password: 'password123' },
      { email: 'usuario2@example.com', password: 'mypassword' },
      { email: 'usuario3@example.com', password: 'secretpass' },
    ];
  
    const user = validUsers.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      const response = new Response(JSON.stringify({ message: 'Login exitoso' }), {
        status: 200,
      });
      
      
      response.cookies.set('auth-token', 'mi-token-secreto', {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        path: '/', 
        maxAge: 60 * 60 * 24, // Expira en 1 día
      });
  
      return response;
    } else {
      return new Response(JSON.stringify({ message: 'Credenciales inválidas' }), {
        status: 401,
      });
    }
  }
  