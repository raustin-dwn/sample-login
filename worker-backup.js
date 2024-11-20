export default {
    async fetch(request) {
      const url = new URL(request.url);
      
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          headers: {
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        });
      }
  
      // Check if this is the login endpoint
      if (url.pathname !== '/login') {
        return new Response(
          JSON.stringify({ 
            success: false, 
            message: 'Endpoint not found' 
          }),
          {
            status: 404,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }
  
      // Handle login POST request
      if (request.method === 'POST') {
        try {
          const { email, password } = await request.json();
  
          // Mock valid users
          const validUsers = [
            { email: 'user1@example.com', password: 'password123' },
            { email: 'user2@example.com', password: 'password456' },
          ];
  
          // Check if the credentials are valid
          const user = validUsers.find(
            (user) => user.email === email && user.password === password
          );
  
          if (user) {
            return new Response(
              JSON.stringify({ 
                success: true, 
                message: 'Login successful' 
              }),
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*', 
                },
                status: 200,
              }
            );
          } else {
            return new Response(
              JSON.stringify({ 
                success: false, 
                message: 'Invalid credentials' 
              }),
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*', 
                },
                status: 401,
              }
            );
          }
        } catch (error) {
          return new Response(
            JSON.stringify({
              success: false,
              message: 'Invalid request format',
              error: error.message
            }),
            {
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', 
              },
              status: 400,
            }
          );
        }
      }
  
      // Handle other HTTP methods
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Method not allowed' 
        }),
        {
          status: 405,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    },
  };