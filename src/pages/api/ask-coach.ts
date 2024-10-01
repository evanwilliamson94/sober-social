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

  // Replace this with actual AI API (e.g., OpenAI API)
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      prompt: prompt,
      max_tokens: 100,
    }, {
      headers: {
        'Authorization': `Bearer YOUR_API_KEY`,  // Replace with your API key
        'Content-Type': 'application/json',
      },
    });

    const aiResponse = response.data.choices[0].text;
    res.status(200).json({ reply: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: 'Error: Unable to get a response from AI' });
  }
}
