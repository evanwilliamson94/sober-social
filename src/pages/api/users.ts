// /pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getUsers, addUser } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const users = await getUsers();
    return res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    const newUser = await addUser(name, email);
    return res.status(201).json(newUser);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
  
}
