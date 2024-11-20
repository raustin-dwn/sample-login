export default {
    async fetch(request) {
      // Handle CORS preflight requests
      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "86400",
          }
        });
      }
  
      const { pathname } = new URL(request.url);
  
      // Handle /login route
      if (pathname === '/login' && request.method === 'POST') {
        const response = await handleLogin(request);
        
        // Add CORS headers to the response
        const corsHeaders = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        };
  
        // Create new response with CORS headers
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: {
            ...Object.fromEntries(response.headers),
            ...corsHeaders,
          },
        });
      }
  
      // Fallback for unsupported paths
      return new Response('Not Found', {
        status: 404,
        headers: { 
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      });
    },
  };