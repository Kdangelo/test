import React from "react";
import { useEffect, useState } from "react";

const MiApi = ({ filteredInfo }) => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  //consulta informacion API
  const fetchData = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const response = await fetch(`${url}`);
      const data = await response.json();

      const promises = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      });
      const results = await Promise.all(promises);
      setInfo(results);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  //filtrado de pokemones
  const filterPokemon = info.filter((item) => {
    const filteredItem = filteredInfo.toLowerCase()
    return item.name.toLowerCase().includes(filteredItem) 
  })

  return (
    <div className="row">
      {/* renderizo los datos recibidos de la API */}
      {info &&
        filterPokemon.map((item) => (
          <div key={item.id} className="card m-2" style={{ width: "10rem" }}>
            <div className="card-body">
              <p className="card-text">{item.name}</p>
            </div>
            <img
              src={item.sprites.other.dream_world.front_default}
              className="card-img-top"
              alt="pokemon"
            ></img>
          </div>
        ))}
    </div>
  );
};

export default MiApi;
