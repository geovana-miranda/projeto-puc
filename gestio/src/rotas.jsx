import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from "./context/UsuarioContext";

import Cadastro from "./pages/Cadastro/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route path="/" element={<Cadastro />} />
        </Routes>
      </UsuarioProvider>
    </BrowserRouter>
  );
}

export default App;
