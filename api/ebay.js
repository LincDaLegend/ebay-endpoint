export default async function handler(req, res) {
  if (req.method === 'POST') {
    let body = {};

    try {
      body = JSON.parse(req.body || '{}');
    } catch (e) {
      // Fallback if Vercel already parsed it
      body = req.body || {};
    }

    if (body.challengeCode) {
      return res.status(200).json({ challengeResponse: body.challengeCode });
    }
    return res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
