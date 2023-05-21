import { useEffect, useState } from "react";

const MiApi = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    informationApi();
  }, []);

  //consulta infromacion API
  const informationApi = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(`${data}`);
  };
  return <div>{info}</div>;
};

export default MiApi;
