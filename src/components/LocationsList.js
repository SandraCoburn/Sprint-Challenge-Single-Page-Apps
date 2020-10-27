import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then(response => {
        console.log("this response:", response);

        setLocation(response.data.results);
      })
      .catch(error => {
        console.log("Data didn't load", error);
      });
  }, []);

  return (
    <section className="list">
      {location.map(character => {
        return <LocationCard character={character} />;
      })}
    </section>
  );
}
