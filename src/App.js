import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import TestBox from './pages/TestBox';
import TestStack from './pages/TestStack';
import TestGrid from './pages/TestGrid';
import TestGrid2 from './pages/TestGrid2';
import TestButton from './pages/TestButton';
import TestDrawer from './pages/TestDrawer';
import TestDataGrid from './pages/TestDataGrid';
import TestDataGrid2 from './pages/TestDataGrid2';

function App() {
  return (
    <div className="App">
      {/* 메뉴 */}
      <nav>
        <Link to="/">BoxTest</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/stack">StackTest</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/grid">GridTest</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/grid2">GridTest2</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/button">ButoonTest</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/mail">DrawerTest</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/data_grid">DataGridTest</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/data_grid2">DataGridTest2</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      </nav>

      <Routes>
        <Route path="/" element={<TestBox />} />
        <Route path="/stack" element={<TestStack />} />
        <Route path="/grid" element={<TestGrid />} />
        <Route path="/grid2" element={<TestGrid2 />} />
        <Route path="/button" element={<TestButton />} />
        <Route path="/mail" element={<TestDrawer />} />
        <Route path="/data_grid" element={<TestDataGrid />} />
        <Route path="/data_grid2" element={<TestDataGrid2 />} />
      </Routes>
    </div>
  );
}

export default App;
