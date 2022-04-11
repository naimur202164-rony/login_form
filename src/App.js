import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Registar from "./Pages/Registar/Registar";

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>  
    <Route path="/" element={<Login />}/>
      <Route path="/reg" element={<Registar />}/>
      
    </Routes>

  </BrowserRouter>,
    </div>
  );
}

export default App;
