const movies = []
import { v4 as uuidv4 } from "uuid";
console.log("first");
export const getMovies = (req, res) => {
  res.json(movies);
};

export const postMovie = (req, res) => {
  // console.log(req.body);
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const newMovie = { id: uuidv4(), ...req.body };
    movies.push(newMovie);
    res.send("movie added");
  } else {
    res.send("missing fields");
  }
};

export const updateMovie = (req, res) => {
  const { id } = req.params;

  const { title, director, year, rating } = req.body;
  const index = movies.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    movies[index] = { id, title, director, year, rating };
    res.send("movie updated");
  } else {
    res.send("movie not found");
  }
};

export const deleteMovie = (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  const index = movies.findIndex((movie) => movie.id === id);
  // console.log(`index: ${index}`);
  if (index !== -1) {
    movies.splice(index, 1);
    res.send("movie deleted");
  } else {
    res.send("movie not found");
  }
};
