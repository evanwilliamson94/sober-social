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
        model: 'text-davinci-003', // The model you're using (correct name)
        prompt: prompt,            // The prompt from the user input
        max_tokens: 100,           // Limit the response length
        temperature: 0.7,          // (Optional) creativity control
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`, // Using API key from the environment
          'Content-Type': 'application/json',
        },
      }
    );

    // Retrieve the response from the OpenAI API
    const aiResponse = response.data.choices[0].text;
    res.status(200).json({ reply: aiResponse.trim() }); // Respond to the client
  } catch (error: any) {
    // Log detailed error to help with debugging
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ reply: 'Error: Unable to get a response from AI' });
  }
}
