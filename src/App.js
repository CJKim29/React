import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/main.css'
import VisitList from './pages/VisitList';
import VisitForm from './pages/VisitForm';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">

      <h1 className="title">방명록</h1>
      <hr />
      {/* 메뉴 */}
      <nav>
        <div className='btn=group btn-group-justified'>
          <Link to="/" className='btn btn-success mybtn'>목록보기</Link> &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/form" className='btn btn-success mybtn'>글쓰기</Link>
        </div>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<VisitList />} />
        <Route path="/form" element={<VisitForm />} />
      </Routes>
    </div>
  );
}

export default App;
