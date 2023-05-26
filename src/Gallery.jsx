import React from 'react';
import { useGlobalContext } from './context';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_ACCESS_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>Ima neka greska...</h4>
      </section>
    );
  }
  const results = response.data.results;
  console.log(results);
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>Nema podataka !</h4>
      </section>
    );
  }
  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular;
        return <img key={item.id} src={url} className='img'></img>;
      })}
    </section>
  );
};

export default Gallery;
