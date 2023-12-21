import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Image from "./Components/Image";
import ImageList from "./Components/ImageList";
import jsonData from "./data/data/images.json";

function App() {
  const arrImages = jsonData;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageList images={arrImages} />} />
          <Route path="image/:imageId" element={<Image images={arrImages} />} />gg
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
