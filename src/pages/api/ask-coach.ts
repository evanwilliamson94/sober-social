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

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',  // Make sure this model is supported by your OpenAI account
        prompt: prompt,
        max_tokens: 100,            // Adjust this value if needed
        temperature: 0.7,           // You can set a value for creativity
        n: 1,                       // Number of completions to generate
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const aiResponse = response.data.choices[0].text.trim();
    res.status(200).json({ reply: aiResponse });
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ reply: 'Error: Unable to get a response from AI' });
  }
}
