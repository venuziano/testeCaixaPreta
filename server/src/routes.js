import express from 'express';

import Auth from './controllers/AuthController.js';
import BookController from './controllers/BookController.js'

const bookControler = new BookController(); 

const routes = express.Router();

routes.post('/auth', Auth);

routes.get('/books', bookControler.index);
routes.put('/book/:id', bookControler.update);

export default routes;


