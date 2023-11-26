import { Router } from "express";

const router = Router();

//create tweet
router.post('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

//list tweets
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

//get one tweet
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ message: 'Not implemented' });
});

//update tweet
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ message: 'Not implemented' });
});

//delete tweet
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ message: 'Not implemented' });
});

export default router;