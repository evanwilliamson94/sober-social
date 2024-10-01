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
    // Log the prompt to verify it is being passed correctly
    console.log('Prompt:', prompt);

    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // Ensure you're using the correct model
        prompt: prompt,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Log the entire response from OpenAI
    console.log('OpenAI Response:', response.data);

    const aiResponse = response.data.choices[0].text;
    res.status(200).json({ reply: aiResponse });
  } catch (error: any) {
    console.error('Error from OpenAI:', error.response?.data || error.message);
    res.status(500).json({ reply: 'Error: Unable to get a response from AI' });
  }
}
