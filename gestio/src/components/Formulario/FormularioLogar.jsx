import styles from "./Formulario.module.css";

import Input from "./Input/Input.jsx";

const FormularioLogar = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <section className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <h3>Fazer login</h3>

        <div>
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Digite seu email..."}
          />
          <Input
            label={"Senha"}
            type={"password"}
            placeholder={"Digite sua senha..."}
          />
        </div>
        <div>
          <button className={styles.botaoFinalizar}>Logar</button>
        </div>
      </form>
    </section>
  );
};

export default FormularioLogar;
