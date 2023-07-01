import logo from './logo.svg';
import { Routes, Route, Navigate } from 'react-router-dom'
import BlodTable from './component/Bloodtable';
import BloodForm1 from './component/Bloodform';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/bloodform"></Navigate>}></Route>
        <Route path="bloodform" element={BloodForm1}></Route>
        <Route path="bloodtable" element={BlodTable}></Route>
      </Routes>
    </div>
  );
}

export default App;
