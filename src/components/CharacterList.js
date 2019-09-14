import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList(props) {
  const [char, newChar] =useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then (res => {
      console.log(res.data.results)
        newChar(res.data.results)
    })
    .catch (err => 
      console.log(err)
      );
  }, []);

  return (
    <section className="character-list grid-view">
       <h2>
      {char.map((char, index) => 
        <CharacterCard 
          image= {char.image}
          name= {char.name}
          species= {char.species}
          gender= {char.gender}
          status= {char.status}
      />)} 
      </h2>
    </section>
  );
}
