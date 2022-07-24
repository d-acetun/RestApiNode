import { Router } from 'express';
import {getMovies, postMovie, updateMovie, deleteMovie} from '../controllers/index.controllers.js';
const router = Router();

// console.log(movies);
router.get('/', getMovies);

router.post('/', postMovie);

router.put('/:id', updateMovie );

router.delete('/:id', deleteMovie);


export default router;