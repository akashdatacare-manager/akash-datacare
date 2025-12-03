export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).send('Use POST');

  const AI_ENDPOINT = process.env.AI_ENDPOINT;
  const API_KEY = process.env.AI_KEY;

  const resp = await fetch(AI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify(req.body)
  });

  const data = await resp.json();
  res.status(resp.status).json(data);
}
