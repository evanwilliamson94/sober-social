import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/utils/db';
import { posts } from '@/utils/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all posts
    try {
      const allPosts = await db.select().from(posts);
      res.status(200).json({ data: allPosts });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching posts' });
    }
  } else if (req.method === 'POST') {
    // Add a new post
    const { userId, content } = req.body;
    try {
      const newPost = await db.insert(posts).values({ userId, content }).returning();
      res.status(201).json({ data: newPost });
    } catch (error) {
      res.status(500).json({ error: 'Error adding post' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
