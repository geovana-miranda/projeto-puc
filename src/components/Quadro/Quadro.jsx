import styles from "./Quadro.module.css";

import { BsThreeDotsVertical } from "react-icons/bs";
import { useState, useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

import ModalAlterarQuadro from "../Modal/ModalAlterarQuadro";


const Quadro = ({ quadros, setQuadros, usuarioAtual, setUsuarioAtual }) => {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const [quadroSelecionado, setQuadroSelecionado] = useState("");
  const [abrirModalAlterar, setAbrirModalAlterar] = useState(false);


  const meusQuadros = quadros.filter(
    (item) => !item.membros || item.membros.length === 0
  );

  const quadrosCompartilhados = quadros.filter(
    (item) => item.membros && item.membros.length > 0
  );


  const excluirQuadro = (id) => {
    const usuariosAtualizados = usuarios.map((usuario) => ({
      ...usuario,
      quadros: usuario.quadros.filter((quadro) => quadro.id !== id),
    }));

    const usuarioAtualizado = usuariosAtualizados.find(
      (item) => item.id === usuarioAtual.id
    );
    setUsuarioAtual(usuarioAtualizado);

    setUsuarios(usuariosAtualizados);

    localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));
  };

  const alterarQuadro = (quadro, titulo, idMembros) => {
    const quadroAlterado = {
      ...quadro,
      titulo: titulo,
      membros: idMembros || [],
    };

    const usuariosAtualizados = usuarios.map((usuario) => {

      if (usuario.id === usuarioAtual.id) {
        return {
          ...usuario,
          quadros: usuario.quadros.map((item) =>
            item.id === quadro.id ? quadroAlterado : item
          ),
        };
      }

      if (!idMembros.includes(usuario.id)) {
        return {
          ...usuario,
          quadros: usuario.quadros.filter((item) => item.id !== quadro.id) || []
        };
      } else {
        const quadrosMembro = usuario.quadros.filter(
          (item) => item.id !== quadro.id
        );
        return { ...usuario, quadros: [...quadrosMembro, quadroAlterado] };
      }

    });

    localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));

    setUsuarios(usuariosAtualizados);

    setUsuarioAtual((usuarioAtual) => ({
      ...usuarioAtual,
      quadros: quadros.map((item) =>
        item.id === quadro.id ? quadroAlterado : item
      ),
    }));
  };

  return (
    <>
      <h3 className={styles.tituloQuadros}>Meus quadros</h3>
      <ul className={styles.meusQuadros}>
        {meusQuadros.map((quadro) => (
          <li className={styles.itemLista} key={quadro.id}>
            <div className={styles.fotoTitulo}>
              <img
                src="https://cdn.blablacar.com/wp-content/uploads/br/2024/05/05094506/como-planejar-uma-viagem.webp"
                alt=""
              />
              <p>{quadro.titulo}</p>
            </div>

            {quadro.admin == usuarioAtual.id && (
              <BsThreeDotsVertical
                className={styles.icone}
                onClick={() => {
                  setAbrirModalAlterar(true);
                  setQuadroSelecionado(quadro);
                }}
              />
            )}
          </li>
        ))}
      </ul>

      <h3 className={styles.tituloQuadros}>Quadros compartilhados</h3>

      <ul className={styles.meusQuadros}>
        {quadrosCompartilhados.map((quadro) => (
          <li className={styles.itemLista} key={quadro.id}>
            <div className={styles.fotoTitulo}>
              <img
                src="https://cdn.blablacar.com/wp-content/uploads/br/2024/05/05094506/como-planejar-uma-viagem.webp"
                alt=""
              />
              <p>{quadro.titulo}</p>
            </div>

            {quadro.admin == usuarioAtual.id && (
              <BsThreeDotsVertical
                className={styles.icone}
                onClick={() => {
                  setAbrirModalAlterar(true);
                  setQuadroSelecionado(quadro);
                }}
              />
            )}
          </li>
        ))}
      </ul>

      {abrirModalAlterar && (
        <ModalAlterarQuadro
          quadros={quadros}
          setQuadros={setQuadros}
          abrirModalAlterar={abrirModalAlterar}
          setAbrirModalAlterar={setAbrirModalAlterar}
          quadroSelecionado={quadroSelecionado}
          excluirQuadro={(id) => excluirQuadro(id)}
          alterarQuadro={(quadro, titulo, idMembros) =>
            alterarQuadro(quadro, titulo, idMembros)
          }
          excluirMembro={(id) => excluirMembro(id)}
          usuarioAtual={usuarioAtual}
        />
      )}

    </>
  );
};

export default Quadro;
