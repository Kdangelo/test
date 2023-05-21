import React from "react";
import { useEffect, useState } from "react";

const MiApi = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //consulta informacion API
  const fetchData = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data.results);
      console.log(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <div>
      {/* renderizo los datos recibidos de la API */}
      {info && (
        <ul>
          {info.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MiApi;
