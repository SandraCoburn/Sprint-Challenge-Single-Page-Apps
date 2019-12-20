import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
// import { Route, Link } from "react-router-dom";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        console.log("this response:", response);
      })
      .catch(error => {
        console.log("Data didn't load", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>
        {CharacterList.map(character => {
          return <CharacterCard character={character} />;
        })}
      </h2>
    </section>
  );
}
