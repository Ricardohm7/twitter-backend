import { Router } from "express";

const router = Router();

//create user
router.post('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

//list users
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

//get one user
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ message: 'Not implemented' });
});

//update user
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ message: 'Not implemented' });
});

//delete user
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ message: 'Not implemented' });
});

export default router;