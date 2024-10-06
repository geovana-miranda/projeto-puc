import Input from "../Formulario/Input/Input";
import styles from "./Formulario.module.css";

import { useState, useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Formulario = ({ cadastrarUsuario }) => {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    cadastrarUsuario({
      nome,
      email,
      senha,
      imagem,
    });

    setNome("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    setImagem("");
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
            valor={nome}
            setValor={setNome}
          />
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Digite seu email..."}
            valor={email}
            setValor={setEmail}
          />
          <Input
            label={"Senha"}
            type={"password"}
            placeholder={"Digite sua senha..."}
            valor={senha}
            setValor={setSenha}
          />
          <Input
            label={"Confirmar senha"}
            type={"password"}
            placeholder={"Confirme sua senha"}
            valor={confirmarSenha}
            setValor={setConfirmarSenha}
          />

          <Input
            label={"URL da imagem"}
            type={"text"}
            placeholder={"https://github.com/seuperfil.png"}
            valor={imagem}
            setValor={setImagem}
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
