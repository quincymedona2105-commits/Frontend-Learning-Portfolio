import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Banner from "./components/Banner";
import StringRendering from "./pages/StringRendering";
import BooleanRendering from "./pages/BooleanRendering";
import NumberRendering from "./pages/NumberRendering";
import Falsy from "./pages/Falsy";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/string" element={<StringRendering />} />
        <Route path="/boolean" element={<BooleanRendering />} />
        <Route path="/number" element={<NumberRendering />} />
        <Route path="/falsy" element={<Falsy />} />
      </Routes>
    </>
  );
};

export default App;