import React, { useState, useEffect } from 'react';

import './styles.css'
import api from '../../../services/api';

const UpdateBooks = ({ id, name, year, onClose = () => {}, modal = 'modal' }) => {
  const [title, setTitle] = useState('');
  const [yearBook, setYearBook] = useState('');

  const handleOutsideClick = (e) => {
    if (e.target.id === modal) 
      onClose();
  }

  //token enviado pelo header ou localStorage da página de login vem aqui
  const token = '';

  useEffect(() => {
    setTitle(name);
    setYearBook(year);
  }, [name, year])

  async function handleUpdateBook(e) {

    const book = {
      name: title,
      year: yearBook
    };

    try {
      await api.put(`book/${id}`, book, {
        headers: {
          Authorization: token,
        },
      });

    } catch (error) {
      alert('Não foi possível atualizar as informações do livro, tente novamente.')
    }
  }

  return (
    <div id={modal} className="container" onClick={handleOutsideClick}>
      <div className="modal">
        <form onSubmit={handleUpdateBook}>
          <h1>Editor de livro</h1>

          <div className="content">
            <strong>TÍTULO *:</strong>
            <input
              placeholder="Título"
              type="text"
              id="name"
              autoFocus
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <strong>ANO *:</strong>
            <input
              placeholder="Ano"
              type="text"
              id="year"
              required
              value={yearBook}
              onChange={e => setYearBook(e.target.value)}
            />

            <button className="button" type="submit">Salvar</button>
            <button onClick={onClose}>Fechar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateBooks;