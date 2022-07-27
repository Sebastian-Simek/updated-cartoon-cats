const { Router } = require('express');
const { cats } = require('../../data/cats');
const router = Router();


router
  .get('/', (req, res) => {
    const cat = cats.map((cat) => {
      return {
        id: cat.id,
        name: cat.name
      };
    });
    res.json(cat);
  })
  .get('/:id', (req, res) => {
    const cat = cats.find((cat) => cat.id === req.params.id);
    res.json(cat);
  });



module.exports = router;
