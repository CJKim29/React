import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Ex1 from "./pages/Ex1";
import Ex2 from "./pages/Ex2";
import Ex3 from "./pages/Ex3";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">메뉴 1</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/ex2">메뉴 2</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/ex3">메뉴 3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Ex1 />} />
        <Route path="/ex2" element={<Ex2 />} />
        <Route path="/ex3" element={<Ex3 />} />
      </Routes>
    </div>
  );
}

export default App;
