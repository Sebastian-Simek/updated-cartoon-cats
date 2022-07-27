const { Router } = require('express');
const Cat = require('../models/Cat');
const router = Router();
console.log('hello');
router
  .get('/', async (req, res) => {
    const cat = await Cat.getAll();
    console.log(cat);
    res.json(cat);
  });
  // .get('/:id', (req, res) => {
  //   const cat = cats.find((cat) => cat.id === req.params.id);
  //   res.json(cat);
  // });



module.exports = router;
