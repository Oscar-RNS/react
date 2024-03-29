import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import { Container } from "react-bootstrap";
import Task from "./components/proyectos/app-tareas/Task";
import CurrencyConverter from "./components/proyectos/app-divisas/CurrencyConverter";
import Climate from "./components/proyectos/app-clima/Climate";

function App() {
  return (   
   <>  
   <BrowserRouter>     
      <Header/> 
      <Container>
      <Routes>           
        <Route path="/" element={<Home />} /> 
        <Route path='/tarea' element={<Task/>}/>
        <Route path="/clima" element={<Climate/>} />           
        <Route path="/divisa" element={<CurrencyConverter/>} /> 
      </Routes>
      </Container>
    </BrowserRouter>  
   </>
  );
}

export default App;
