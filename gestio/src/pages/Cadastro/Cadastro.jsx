import styles from "./Cadastro.module.css";

import logo from "../../assets/logo.png";

const Cadastro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo da gestio" />
        <h1>GESTIO</h1>
      </div>
      <div className={styles.texto}>
        <h2>Simplifique suas tarefas, potencialize seus resultados.</h2>
      </div>
      <div>
        <button className={styles.botao}>
          Já possui conta?
        </button>
      </div>


    </div>
  )
}

export default Cadastro
