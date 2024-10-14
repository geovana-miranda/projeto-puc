import styles from "./Inicio.module.css";

import { useContext , useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";

import Cabecalho from "../../components/Cabecalho/Cabecalho";

const Inicio = () => {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const location = useLocation();
  const idUsuario = location.state?.idUsuario;

  const [usuarioAtual, setUsuarioAtual] = useState("");
  const [usuariosCarregados, setUsuariosCarregados] = useState(false);

  useEffect(() => {
    const usuariosSalvos = localStorage.getItem("usuarios");

    if (usuariosSalvos) {
      setUsuarios(JSON.parse(usuariosSalvos));
      setUsuariosCarregados(true);
    }
  }, []);

  useEffect(() => {
    if (usuariosCarregados) {
      const usuario = usuarios.find((item) => item.id === idUsuario);
      console.log(usuario)
      setUsuarioAtual(usuario);
      setUsuariosCarregados(false);
    }
  }, [usuariosCarregados]);

  return (
    <div>
      <Cabecalho idUsuario={idUsuario} />
      <section className={styles.quadros}>
        <div className={styles.pesquisa}>
          <input
            className={styles.pesquisaInput}
            type="text"
            placeholder="Procurar por quadro"
          />
        </div>
        <div className={styles.criarQuadro}>
          <button>+</button>
          <p>Criar novo quadro</p>
        </div>

        <div>
          <h3>Meus quadros</h3>

          <ul className={styles.meusQuadros}>
            <li>Exemplo de quadro</li>
            <li>Exemplo de quadro</li>
            <li>Exemplo de quadro</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
