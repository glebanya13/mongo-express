import express from "express";
import Record from '../models/Record.js'
const router = express.Router();

router.get('/', async (req, res) => {
   res.json(await Record.find());
});

router.post('/', async (req, res) => {
   try {
      const record = new Record(req.body);
      await record.save();
      res.send({ status: 'OK' });
   } catch (err) {
      if (err.name === 'ValidationError') {
         res.status(400).send({ error: 'Validation error' });
         console.log('Validation error');
      } else {
         res.status(500).send({ error: 'Server error' });
         console.log('Server error');
      }
   }
});

router.get('/:id', async (req, res) => {
   res.json(await Record.findById(req.params.id));
});

router.put('/:id', async (req, res) => {
   await Record.findByIdAndUpdate(req.params.id, req.body);
   res.json({ state: 'updated' });
});

router.delete('/:id', async (req, res) => {
   await Record.findByIdAndRemove(req.params.id);
   res.json({ state: 'deleted' });
});

export default router;