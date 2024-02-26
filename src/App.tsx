import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenido from './components/bienvenido';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>           
           <Route path="/" element={<Bienvenido />} />
           <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>    
      </header>
    </div>
  );
}

export default App;
