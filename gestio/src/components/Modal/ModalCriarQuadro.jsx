import styles from "./ModalCriarQuadro.module.css";

const ModalCriarQuadro = ({
  quadros,
  abrirModalCriar,
  setAbrirModalCriar,
  tituloQuadro,
  setTituloQuadro,
  novoQuadro,
}) => {
  const criandoQuadro = () => {
    novoQuadro(tituloQuadro);
    setAbrirModalCriar(!abrirModalCriar);
  };

  if (abrirModalCriar) {
    return (
      <section className={styles.background}>
        <div className={styles.modal}>
          <div className={styles.cabecalhoModal}>
            <h3>Criar Quadro</h3>

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
