import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//create user
router.post('/', async (req, res) => {
  const { email, name, username } = req.body;
  console.log(email, name, username)
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        username,
        bio: "Hellow, I'm new on Twitter!"
      },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Username and email should be unique' });
  }
});

//list users
router.get('/', async (req, res) => {
  const allUsers = await prisma.user.findMany();
  // res.status(501).json({ message: 'Not implemented' });
  res.json(allUsers);
});

//get one user
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(user);
});

//update user
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { email, name, username, bio } = req.body;
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        email,
        name,
        username,
        bio
      },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.meta.cause });
  }
});

//delete user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.meta.cause });
  }
});

export default router;