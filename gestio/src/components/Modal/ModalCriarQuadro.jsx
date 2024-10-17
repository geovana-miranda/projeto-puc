import styles from "./ModalCriarQuadro.module.css";
import { useState } from "react";

const ModalCriarQuadro = ({
  quadros,
  abrirModalCriar,
  setAbrirModalCriar,
  tituloQuadro,
  setTituloQuadro,
  novoQuadro,
}) => {
  const [msgErroQuadro, setMsgErroQuadro] = useState("");
  const criandoQuadro = () => {
    if (tituloQuadro === "") {
      setMsgErroQuadro( "Digite um nome válido" );
      return;
    }

    if (quadros.some((item) => tituloQuadro === item.titulo)) {
      setMsgErroQuadro( "Já existe um quadro com esse nome" );
      return;
    }
    novoQuadro(tituloQuadro);
    setAbrirModalCriar(!abrirModalCriar);
    setMsgErroQuadro("");
  };

  if (abrirModalCriar) {
    return (
      <section className={styles.background}>
        <div className={styles.modal}>
          <div className={styles.cabecalhoModal}>
            <h3>Criar Quadro</h3>
            {msgErroQuadro && (
              <div className={styles.msgErro}>
                <p>{msgErroQuadro}</p>
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
                  onChange={(e) => setTituloQuadro(e.target.value)}
                  value={tituloQuadro}
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
              <button
                className={styles.botao}
                onClick={() => {
                  setAbrirModalCriar(!abrirModalCriar);
                  setTituloQuadro("");
                }}
              >
                Cancelar
              </button>
              <button
                onClick={() => criandoQuadro()}
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

export default ModalCriarQuadro;
