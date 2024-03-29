import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Tarea from './components/proyectos/app-tareas/Tarea';
import Clima from './components/proyectos/app-clima/Clima';
import { Container } from "react-bootstrap";
import Divisa from "./components/proyectos/app-divisas/Divisa";

function App() {
  return (   
   <>  
   <BrowserRouter>     
      <Header/> 
      <Container>
      <Routes>           
        <Route path="/" element={<Home />} /> 
        <Route path='/tarea' element={<Tarea/>}/>
        <Route path="/clima" element={<Clima/>} />           
        <Route path="/divisa" element={<Divisa/>} /> 
      </Routes>
      </Container>
    </BrowserRouter>  
   </>
  );
}

export default App;
