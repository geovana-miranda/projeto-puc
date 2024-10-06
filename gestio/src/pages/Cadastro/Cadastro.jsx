import styles from "./Cadastro.module.css";

import logo from "../../assets/logo.png";

import {useState} from "react";
import FormularioCriarConta from "../../components/Formulario/FormularioCriarConta";
import FormularioLogar from "../../components/Formulario/FormularioLogar";

const Cadastro = () => {
  
  const [nomeBotao, setNomeBotao] = useState("Já possui conta?");
  const [formLogar, setformLogar] = useState(false);

  const paginaLogar = () => {
    setformLogar(!formLogar);
    !formLogar
      ? setNomeBotao("Não possui conta?")
      : setNomeBotao("Já possui conta?");
  };

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
        <button onClick={() => paginaLogar()} className={styles.botao}>
          {nomeBotao}
        </button>
      </div>
      {!formLogar && (
        <FormularioCriarConta
        />
      )}

      {formLogar && (
        <FormularioLogar />
      )}

    </div>
  )
}

export default Cadastro
