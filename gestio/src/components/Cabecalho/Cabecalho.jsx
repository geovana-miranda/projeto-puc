import styles from "./Cabecalho.module.css";
import logo from "../../assets/logo-roxo.png";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useContext } from "react";

const Cabecalho = ({ idUsuario }) => {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const usuario = usuarios.find((item) => item.id === idUsuario);

  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="" />
      <nav className={styles.navegacao}>
        <a href="">Quadros</a>
        <a href="">Sobre nós</a>
        <div className={styles.minhaConta}>
          <img src={usuario.imagem} alt="" />
          <select></select>
        </div>
      </nav>
    </header>
  );
};

export default Cabecalho;
