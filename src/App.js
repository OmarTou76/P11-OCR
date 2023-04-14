import { useState } from "react";
import { Tag } from "./components/Tag";
import { Thumb } from "./components/Thumb";
import './components/styles/components.css'
import { data } from "./data";
import { Dropdown } from "./components/Dropdown";

function App() {

  return (
    <div className="App">
      <Thumb props={{ image: data[0].cover, title: data[0].title }} />
      {data[0].tags.map(tag => <Tag props={{ name: tag }} />)}
      <Dropdown props={{ title: "Description", list: data[0].equipments }} />
      <Dropdown props={{ title: "Fiabilité", list: ["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."] }} />
    </div>

  );
}

export default App;
