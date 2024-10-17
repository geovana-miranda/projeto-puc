import styles from "./ModalCriarQuadro.module.css";

import { useState } from "react";

const ModalAlterarQuadro = ({
  quadros,
  setQuadros,
  abrirModalAlterar,
  setAbrirModalAlterar,
  quadroSelecionado,
}) => {
  const [titulo, setTitulo] = useState(quadroSelecionado.titulo);
  const [msgErroAlterarQuadro, setMsgErroAlterarQuadro] = useState("");


  const alterarQuadro = () => {
    if (titulo === "") {
      setMsgErroAlterarQuadro( "Digite um título válido" );
        return;
    }

    if (quadros.some((item) => titulo === item.titulo)) {
      setMsgErroAlterarQuadro( "Você já adicionou esse quadro" );
        return;
    }

    const quadroAtulizado = quadros.map((item) =>
      item.id === quadroSelecionado.id ? { ...item, titulo: titulo } : item
    );

    setQuadros(quadroAtulizado);
    setAbrirModalAlterar(!abrirModalAlterar);
    setMsgErroAlterarQuadro("");

  };

  const excluirQuadro = () => {
    const quadrosAtualizados = quadros.filter(
      (item) => item.id !== quadroSelecionado.id
    );
    setQuadros(quadrosAtualizados);
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
              <input className={styles.inputModal} type="text" />
            </div>
            <div className={styles.botoes}>
              <button className={styles.botao} onClick={() => excluirQuadro()}>
                Excluir Quadro
              </button>
              <button
                onClick={() => alterarQuadro()}
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
