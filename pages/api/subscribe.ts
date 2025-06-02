import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: 'Email is required' });
    return;
  }

  try {
    const response = await axios.post(
      'https://api.mailerlite.com/api/v2/subscribers',
      {
        email: email,
        resubscribe: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY,
        },
      }
    );

    res.status(200).json({ message: 'Subscribed!' });
  } catch (error: any) {
    console.error('MailerLite error:', error.response?.data || error.message);
    res
      .status(500)
      .json({ message: 'Subscription failed', error: error.response?.data || error.message });
  }
}
