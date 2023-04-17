import { useState } from "react";
import { Tag } from "./components/Tag";
import { Thumb } from "./components/Thumb";
import './components/styles/components.css'
import { data } from "./data";
import { Dropdown } from "./components/Dropdown";
import { Carousel } from "./components/Carousel";

function App() {

  return (
    <div className="App">
      <Thumb props={{ image: data[10].cover, title: data[10].title }} />
      {data[10].tags.map(tag => <Tag props={{ name: tag }} />)}
      <Dropdown props={{ title: "Description", list: data[10].equipments }} />
      <Dropdown props={{ title: "Fiabilité", list: ["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."] }} />
      <Carousel title={data[0].title} pictures={data[1].pictures} />
      <Carousel title={data[8].title} pictures={data[8].pictures} />
    </div>

  );
}

export default App;
