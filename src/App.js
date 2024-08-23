import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Ex1 from "./pages/Ex1";
import Ex2 from "./pages/Ex2";
import Ex3 from "./pages/Ex3";
import Ex5 from "./pages/Ex5";
import Ex7 from "./pages/Ex7";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">메뉴 1</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/ex2">메뉴 2</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/ex3">메뉴 3</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/ex5">메뉴 5(map)</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/ex7">메뉴 7(filter+map)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Ex1 />} />
        <Route path="/ex2" element={<Ex2 />} />
        <Route path="/ex3" element={<Ex3 />} />
        <Route path="/ex5" element={<Ex5 />} />
        <Route path="/ex7" element={<Ex7 />} />
      </Routes>
    </div>
  );
}

export default App;
