const { Router } = require('express');
const Cat = require('../models/Cat');
const router = Router();
router
  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(ids);
  })
  .get('/:id', async (req, res) => {
    const cat = await Cat.getById(req.params.id);
    console.log(cat);
    res.json(cat);
  });



module.exports = router;
