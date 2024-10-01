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
    // Log the prompt to verify the input is being passed correctly
    console.log('Prompt:', prompt);

    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // Specify the model to use
        prompt: prompt,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,  // Using the API key from environment variable
          'Content-Type': 'application/json',
        },
      }
    );

    const aiResponse = response.data.choices[0].text;
    res.status(200).json({ reply: aiResponse });
  } catch (error: any) {  // Typing the error as `any` to avoid type issues
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ reply: 'Error: Unable to get a response from AI' });
  }
}
