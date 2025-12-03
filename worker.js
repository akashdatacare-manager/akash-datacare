addEventListener('fetch', event => {
  event.respondWith(handle(event.request));
});

async function handle(req) {
  if(req.method !== 'POST') return new Response('Use POST', { status: 405 });

  const body = await req.text();
  // YOUR AI endpoint and key (kept secret in Cloudflare secrets)
  const AI_ENDPOINT = 'YOUR_AI_API_ENDPOINT'; // e.g. https://...:predict
  const API_KEY = API_KEY_SECRET; // set as secret (see below)

  const resp = await fetch(AI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body
  });
  const text = await resp.text();
  return new Response(text, { status: resp.status, headers: { 'Content-Type': 'application/json' }});
}
