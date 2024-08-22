import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Ex1 from "./pages/Ex1";
import Ex2 from "./pages/Ex2";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">메뉴 1</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/ex2">메뉴 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Ex1 />} />
        <Route path="/ex2" element={<Ex2 />} />
      </Routes>
    </div>
  );
}

export default App;
