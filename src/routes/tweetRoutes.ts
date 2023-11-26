import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

//create tweet
router.post('/', async (req, res) => {
  const { content, userId } = req.body;
  const tweet = await prisma.tweet.create({
    data: {
      content,
      userId: Number(userId)
    }
  });
  res.send(tweet);
});

//list tweets
router.get('/', async (req, res) => {
  const tweets = await prisma.tweet.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          image: true,
        }
      }
    }
  });
  res.send(tweets);
});

//get one tweet
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const tweet = await prisma.tweet.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          image: true,
        }
      }
    }
  });
  if (tweet === null) return res.status(404).send("Tweet not found");
  res.send(tweet);

});

//update tweet
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const tweet = await prisma.tweet.update({
      where: {
        id: Number(id)
      },
      data: {
        content
      }
    });
    res.send(tweet);
  } catch (error) {
    res.status(400).json({ message: error.meta.cause });
  }
});

//delete tweet
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const tweet = await prisma.tweet.delete({
      where: {
        id: Number(id)
      }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.meta.cause });
  }
});

export default router;