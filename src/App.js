import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import TestBox from './pages/TestBox';
import TestStack from './pages/TestStack';

function App() {
  return (
    <div className="App">
      {/* 메뉴 */}
      <nav>
        <Link to="/">BoxTest</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/stack">StackTest</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      </nav>

      <Routes>
        <Route path="/" element={<TestBox />} />
        <Route path="/stack" element={<TestStack />} />
      </Routes>
    </div>
  );
}

export default App;
