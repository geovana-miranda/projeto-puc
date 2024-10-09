import styles from "./Inicio.module.css";

import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";

import Cabecalho from "../../components/Cabecalho/Cabecalho";

const Inicio = () => {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const location = useLocation();
  const idUsuario = location.state?.idUsuario;

  return (
    <div>
      <Cabecalho idUsuario={idUsuario} />
    </div>
  );
};

export default Inicio;
