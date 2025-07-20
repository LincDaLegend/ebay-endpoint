export default async function handler(req, res) {
  if (req.method === 'POST') {
    let body = {};

    // Try to parse JSON manually
    if (req.headers['content-type'] === 'application/json') {
      try {
        body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      } catch (e) {
        return res.status(400).send('Invalid JSON');
      }
    }

    if (body.challengeCode) {
      return res.status(200).json({ challengeResponse: body.challengeCode });
    }

    return res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
