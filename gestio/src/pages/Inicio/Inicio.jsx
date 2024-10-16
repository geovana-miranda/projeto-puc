import styles from "./Inicio.module.css";

import { useContext , useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";
import { v4 as uuidv4 } from "uuid";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import ModalCriarQuadro from "../../components/Modal/ModalCriarQuadro";

const Inicio = () => {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const location = useLocation();
  const idUsuario = location.state?.idUsuario;

  const [usuarioAtual, setUsuarioAtual] = useState("");
  const [usuariosCarregados, setUsuariosCarregados] = useState(false);
  const [quadros, setQuadros] = useState([]);
  const [tituloQuadro, setTituloQuadro] = useState("");
  const [imagemQuadro, setImagemQuadro] = useState(
    "https://cdn.blablacar.com/wp-content/uploads/br/2024/05/05094506/como-planejar-uma-viagem.webp"
  );
  const [abrirModalCriar, setAbrirModalCriar] = useState(false);

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

  useEffect(() => {
    const quadrosUsuarios = usuarioAtual.quadros;
    setQuadros(quadrosUsuarios || []);
  }, [usuarioAtual]);

  useEffect(() => {
    const usuariosAtualizados = usuarios.map((item) =>
      item.id === usuarioAtual.id ? { ...item, quadros: quadros } : item
    );

    localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));
  }, [quadros]);

  function criarQuadro(titulo) {
    setQuadros([...quadros, { titulo: titulo, id: uuidv4() }]);
    setTituloQuadro("");
  }


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
          <button onClick={() => {setAbrirModalCriar(!abrirModalCriar)}}>+</button>
          <p>Criar novo quadro</p>
          <ModalCriarQuadro
          quadros={quadros}
          abrirModalCriar={abrirModalCriar}
          setAbrirModalCriar={setAbrirModalCriar}
          tituloQuadro={tituloQuadro}
          setTituloQuadro={setTituloQuadro}
          novoQuadro={(titulo) => criarQuadro(titulo)}
        />
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
