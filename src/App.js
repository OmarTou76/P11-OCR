import { Tag } from "./components/Tag";
import { Thumb } from "./components/Thumb";
import './components/styles/components.css'

function App() {
  return (
    <div className="App">
      <Tag props={{ name: "Cozy" }} />
      <Thumb props={{ image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg", title: "Appartement cosy" }} />
    </div>
  );
}

export default App;
