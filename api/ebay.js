js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body;
    if (body.challengeCode) {
      return res.status(200).json({ challengeResponse: body.challengeCode });
    }
    return res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
