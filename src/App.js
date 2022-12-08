import { Routes, Route } from 'react-router-dom'
import "./App.css";
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import Error from './components/Error/Error';
import Logement from "./pages/Logement/Logement"
import About from './pages/About/About';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/logement/:logementId" element={<Logement />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;