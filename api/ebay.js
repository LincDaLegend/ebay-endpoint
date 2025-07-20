export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string'
        ? JSON.parse(req.body)
        : req.body;

      if (body && body.challengeCode) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({
          challengeResponse: body.challengeCode
        });
      }

      return res.status(200).send('OK');
    } catch (error) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
  } else {
    return res.status(405).send('Method Not Allowed');
  }
}
