import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  reply: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt } = req.body;
  const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    return res.status(500).json({ reply: 'API key is missing.' });
  }

  try {
    // Call the OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',  // Specify model
        prompt: prompt,
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const aiResponse = response.data.choices[0].text.trim();
    res.status(200).json({ reply: aiResponse });
  } catch (error: any) {
    // Improved error handling to deal with Axios errors and generic errors
    if (axios.isAxiosError(error) && error.response) {
      console.error('Error response data:', error.response.data);
      res.status(500).json({ reply: 'Error: Unable to get a response from AI' });
    } else {
      console.error('Error message:', error.message);
      res.status(500).json({ reply: 'Error: Something went wrong' });
    }
  }
}
