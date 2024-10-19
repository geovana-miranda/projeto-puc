import styles from "./ModalCriarQuadro.module.css";

import { useState, useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const ModalAlterarQuadro = ({
  quadros,
  setQuadros,
  abrirModalAlterar,
  setAbrirModalAlterar,
  quadroSelecionado,
  excluirQuadro,
  alterarQuadro,
  usuarioAtual,
}) => {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const [titulo, setTitulo] = useState(quadroSelecionado.titulo);
  const [emailMembro, setEmailMembro] = useState("");
  const [membro, setMembro] = useState("");
  const [msgErroAlterarQuadro, setMsgErroAlterarQuadro] = useState("");

  const [abrirDropDown, setAbrirDropDrown] = useState(false);

  const [idMembrosQuadro, setIdMembrosQuadros] = useState(
    quadroSelecionado.membros || []
  );

  const membrosQuadro = usuarios.filter((usuario) =>
    idMembrosQuadro.find((item) => item === usuario.id) ? usuario : ""
  );

  const adicionandoMembro = () => {
    if (membro) {
      setIdMembrosQuadros((membrosAtuais) => [...membrosAtuais, membro.id]);
      setEmailMembro("");
      setAbrirDropDrown(false);
    }
  };

  const buscarMembro = () => {
    if (emailMembro === usuarioAtual.email) {
      setMsgErroAlterarQuadro("Você não pode adicionar você mesmo");
      return;
    }

    const buscandoMembro = usuarios.find((item) => emailMembro === item.email);

    if (buscandoMembro) {
      setMsgErroAlterarQuadro("");
      setMembro(buscandoMembro);
      setAbrirDropDrown(true);
    } else {
      setMsgErroAlterarQuadro("Usuário não encontrado");
      return;
    }
  };

  const excluindoMembro = (id) => {
    const membrosAtualizados = idMembrosQuadro.filter((item) => item !== id);
    setIdMembrosQuadros(membrosAtualizados);
  };

  const alterandoQuadro = () => {
    if (titulo === "") {
      setMsgErroAlterarQuadro("Digite um título válido");
      return;
    }

    if (
      quadros.some(
        (item) => titulo === item.titulo && item.id !== quadroSelecionado.id
      )
    ) {
      setMsgErroAlterarQuadro("Esse quadro já existe");
      return;
    }

    alterarQuadro(quadroSelecionado, titulo, idMembrosQuadro);
    setAbrirModalAlterar(!abrirModalAlterar);
    setMsgErroAlterarQuadro("");
  };

  const excluindoQuadro = () => {
    excluirQuadro(quadroSelecionado.id);
    setAbrirModalAlterar(!abrirModalAlterar);
  };

  if (abrirModalAlterar) {
    return (
      <section className={styles.background}>
        <div className={styles.modal}>
          <span
            onClick={(e) => setAbrirModalAlterar(!abrirModalAlterar)}
            className={styles.fechar}
          >
            x
          </span>
          <div className={styles.cabecalhoModal}>
            <h3>Alterar Quadro</h3>

            {msgErroAlterarQuadro && (
              <div className={styles.msgErro}>
                <p>{msgErroAlterarQuadro}</p>
              </div>
            )}

            <img
              src="https://cdn.blablacar.com/wp-content/uploads/br/2024/05/05094506/como-planejar-uma-viagem.webp"
              alt=""
            />
          </div>

          <div className={styles.formulario}>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                <span className={styles.spanModal}>Nome do quadro</span>
                <input
                  onChange={(e) => setTitulo(e.target.value)}
                  value={titulo}
                  className={styles.inputModal}
                  type="text"
                />
              </label>
            </form>

            <div>
              <span className={styles.spanModal}>Membros</span>
              <input
                className={styles.inputModal}
                type="text"
                placeholder="Convite por e-mail"
                value={emailMembro}
                onChange={(e) => setEmailMembro(e.target.value)}
                onKeyDown={(e) => (e.key === "Enter" ? buscarMembro() : "")}
              />

              {membrosQuadro &&
                membrosQuadro.map((item) => {
                  return (
                    <div key={item.id} className={styles.membros}>
                      <img src={item.imagem} alt="" />
                      <div className={styles.dados}>
                        <span>{item.nome}</span>
                        <span className={styles.email}>{item.email}</span>
                      </div>
                      <span
                        className={styles.remover}
                        onClick={() => excluindoMembro(item.id)}
                      >
                        remover
                      </span>
                    </div>
                  );
                })}

              {abrirDropDown && membro && (
                <div className={styles.dropdown}>
                  <div
                    className={styles.dropdownItem}
                    onClick={() => adicionandoMembro()}
                  >
                    <img
                      src={membro.imagem}
                      alt={membro.nome}
                      className={styles.avatar}
                    />
                    <span>{membro.email}</span>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.botoes}>
              <button
                className={styles.botao}
                onClick={() => excluindoQuadro()}
              >
                Excluir Quadro
              </button>
              <button
                onClick={() => alterandoQuadro()}
                className={styles.botaoColorido}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default ModalAlterarQuadro;
