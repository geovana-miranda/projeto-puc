import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from "./context/UsuarioContext";

import Cadastro from "./pages/Cadastro/Cadastro";
import Inicio from "./pages/Inicio/Inicio";

function App() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/home" element={<Inicio />} />
        </Routes>
      </UsuarioProvider>
    </BrowserRouter>
  );
}

export default App;
