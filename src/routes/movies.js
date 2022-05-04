const { Router } = require('express');

const movies = require('../sample.json');
// console.log(movies);
const router = Router();
router.get('/', (req, res) => {
  res.json(movies);
});

router.post('/', (req, res) => {
  console.log(req.body);
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const newMovie = {...req.body, id: movies.length + 1};
    movies.push(newMovie);
    res.send('movie added');
  } else {
    res.send('missing fields');
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const index = movies.findIndex(movie => movie.id === Number(id));
  console.log(`index: ${index}`);
  if (index !== -1) {
    movies.splice(index, 1);
    res.send('movie deleted');
  } else {
    res.send('movie not found');
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  const index = movies.findIndex(movie => movie.id === Number(id));
  if (index !== -1) {
    movies[index] = { id, title, director, year, rating};
    res.send('movie updated');
  } else {
    res.send('movie not found');
  }
});

module.exports = router;