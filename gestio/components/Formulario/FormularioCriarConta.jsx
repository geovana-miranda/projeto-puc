import Input from "../Formulario/Input/Input";
import styles from "./Formulario.module.css";

const Formulario = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <h3>Criar conta</h3>

        <div>
          <Input
            label={"Nome"}
            type={"text"}
            placeholder={"Digite seu nome..."}
          />
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
          <Input
            label={"Confirmar senha"}
            type={"password"}
            placeholder={"Confirme sua senha"}
          />

          <Input
            label={"URL da imagem"}
            type={"text"}
            placeholder={"https://github.com/seuperfil.png"}
          />
        </div>

        <div className={styles.concordar}>
          <input type="checkbox" />
          <p>
            Concordo com os <span>Termos de Uso</span>
          </p>
        </div>

        <div>
          <button className={styles.botaoFinalizar}>Finalizar Cadastro</button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
