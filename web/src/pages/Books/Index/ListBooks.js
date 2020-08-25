import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa'

import api from '../../../services/api';

import './styles.css'

function IndexBooks() {
  const [books, setBooks] = useState([]);

  //o token enviado pelo header da página de login vem aqui
  const token = '';

  async function handleIndexBooks() {

  }

  useEffect(() => {
    try {
      api.get('/books', {
        headers: {
          Authorization: token,
        }
      }).then(response => {
        setBooks(response.data);
      });

    } catch (error) {
      alert('Não foi possível carregar a lista, tente novamente.')
    }
  }, [])

  return (
    <div className="books-container"> 
      <header>
        <img src="https://static.wixstatic.com/media/395950_f9da88d642584fefa780f64ba768934e~mv2.png/v1/fill/w_366,h_61,al_c,q_85,usm_0.66_1.00_0.01/395950_f9da88d642584fefa780f64ba768934e~mv2.webp" alt="logo" />
        
      </header>

      <h1>Lista de Livros:</h1>

      <ul>
        {books.map(book => (
          <li key={book._id}>
            <strong>TÍTULO:</strong>
            <p>{book.name}</p>

            <strong>ANO:</strong>
            <p>{book.year}</p>

            <button type="button">
              <FaEdit size={20} color="#00000" />
            </button>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default IndexBooks;