import React from 'react';
import { useGlobalContext } from './context';

// URL: https://api.unsplash.com/
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className='title'>Prikaz slika</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          className='form-input search-input'
          placeholder='opis slike'
        />
        <button type='submit' className='btn'>
          Pretrazi
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
