import styles from "./Formulario.module.css";

import { UsuarioContext } from "../../context/UsuarioContext";
import { useState, useContext } from "react";

import Input from "./Input/Input.jsx";
import Msg from "./Msg/Msg";

const FormularioLogar = () => {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioVerificado = usuarios.find(
      (item) => emailLogin === item.email && senhaLogin == item.senha
    );

    if (usuarioVerificado) {
      console.log("usuario encontrado");
      setEmailLogin("");
      setSenhaLogin("");
    } else {
      console.log("usuario nao encontrado");
      setMsg({ mensagem: "Usuário ou senha inválidos", cor: "vermelho" });
    }
  };

  return (
    <section className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <h3>Fazer login</h3>
        {msg && <Msg mensagem={msg} />}

        <div>
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Digite seu email..."}
            valor={emailLogin}
            setValor={setEmailLogin}
          />
          <Input
            label={"Senha"}
            type={"password"}
            placeholder={"Digite sua senha..."}
            valor={senhaLogin}
            setValor={setSenhaLogin}
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
