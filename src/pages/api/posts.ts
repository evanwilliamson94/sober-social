// /pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getPosts, addPost } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const posts = await getPosts();
    return res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { userId, content } = req.body;
    const newPost = await addPost(userId, content);
    return res.status(201).json(newPost);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
