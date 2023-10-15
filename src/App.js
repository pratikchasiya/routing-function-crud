import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FormComponent from './components/pages/FormComponent';
import TableComponent from './components/pages/TableComponent';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/form' />} />

          <Route path='/form' element={<FormComponent />}>
          <Route path=':newId' />
          </Route>

          <Route path='/table' element={<TableComponent />}>
          <Route path=':id' />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
