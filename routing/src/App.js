import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      {/* ROUTER NO USE KARVA NPM I REACT-ROUTER-DOM INSTALL KARVU PDE */}
      {/* ROUTER NO USE KARVU HOI TO ANU AA STRUCTURE FIX CHE BROWSERROUTER NI UNDER ROUTES ANI UNDER ROUTE AVE */}
      {/* ROUTE MA APRE PATH APVANO PATH APVA / API P6I J NAME AAPVU HOI PATH NU A APVANU AND APRE A PATH PR JAVU HOI TO BROWSER MA J LOCALHOST3000 LAKHYU ANA P6I LOCALHOST3000/PATHNAME AA RITE ROUTING KARI SKAY */}
      {/* ROUTE MA APRE J ELEMENT JOITO HOI A LAKHVANO ELEMENT MA */}
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />}>
          <Route path=':number'/>
        </Route>
       </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
