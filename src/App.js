import { useState } from "react";
import MiApi from "./components/MiApi";
import Navbar from "./components/Navbar";

function App() {
  const [filtered, setFiltered] = useState("");
  const handleChanges = (e) => {
    setFiltered(e);
  };
  return (
    <div className="App">
      <Navbar onChanges={handleChanges} />
      <MiApi filteredInfo={filtered} />
    </div>
  );
}

export default App;
