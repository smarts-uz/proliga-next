// lib/cors.js
const allowedOrigins = [
  'https://example.com', // Replace with your allowed origins
  'https://another-allowed-origin.com',
]

export function handleCors(request) {
  const origin = request.headers.get('origin')

  if (!origin || !allowedOrigins.includes(origin)) {
    return new Response('CORS Error: Origin not allowed', {
      status: 403,
      headers: {
        'Access-Control-Allow-Origin': 'null',
        'Content-Type': 'text/plain',
      },
    })
  }

  // Add CORS headers
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
