import logo from './logo.svg';
import './App.css';
import {Route,Routes,Navigate} from 'react-router-dom'
import FruitForm from './components/Fruitform';
import FormTable from './components/Fruittable';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/fruittable"></Navigate>}></Route>
        <Route path="fruittable" element={<FormTable/>}></Route>
        <Route path="fruitform" element={<FruitForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
