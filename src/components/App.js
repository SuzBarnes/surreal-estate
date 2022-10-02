import "../styles/app.css";
import "../components/NavBar";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Properties from "../components/Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="addproperty" element={<AddProperty />} />
      </Routes>
    </div>
  );
}

export default App;
