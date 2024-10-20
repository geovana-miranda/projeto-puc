import styles from "./Formulario.module.css";

import Input from "../Formulario/Input/Input";
import Msg from "./Msg/Msg";

import semfoto from "../../assets/semfoto.png";

import { useState, useContext, useRef } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { MdOutlineFileUpload } from "react-icons/md";


const Formulario = ({ cadastrarUsuario }) => {
  const { usuarios, setUsuarios } = useContext(UsuarioContext);

  const inputRef = useRef(null);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [imagem, setImagem] = useState(semfoto);
  const [nomeImagem, setNomeImagem] = useState("");
  const [concordar, setConcordar] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const salvarUsuario = () => {
    const usuarioExiste = usuarios.find((item) => email === item.email);

    if (usuarioExiste) {
      setMsg({ mensagem: "Usuário já cadastrado", cor: "vermelho" });
      return;
    } else {
      setMsg("");
    }

    if (senha !== confirmarSenha) {
      setMsg({ mensagem: "As senhas são diferentes", cor: "vermelho" });
      return;
    } else {
      setMsg("");
    }

    if (!concordar) {
      setMsg({ mensagem: "Você precisa concordar com os termos de uso", cor: "vermelho" });
      return;
    }

    cadastrarUsuario({
      nome,
      email,
      senha,
      imagem,
    });

    setMsg({ mensagem: "Usuário cadastrado com sucesso", cor: "verde" });

    setNome("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    setNomeImagem("");
    setConcordar(false);
    setImagem(semfoto);
  };

  const carregarImagem = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result);
      };
      reader.readAsDataURL(arquivo);
      setNomeImagem(arquivo.name);
    }
  };

  return (
    <section className={styles.formulario}>
      <form onSubmit={handleSubmit}>

        <h3>Criar conta</h3>

        {msg && <Msg mensagem={msg} />}

        <div>
          <Input
            label={"Nome"}
            type={"text"}
            placeholder={"Digite seu nome"}
            valor={nome}
            setValor={setNome}
          />
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Digite seu email"}
            valor={email}
            setValor={setEmail}
          />
          <Input
            label={"Senha"}
            type={"password"}
            placeholder={"Digite sua senha"}
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

          <div className={styles.carregarImagem}>
            <label>
              <span>Imagem: {nomeImagem}</span>
              <button
                className={styles.botaoCarregarImagem}
                onClick={() => inputRef.current.click()}
              >
                <span>Carregar imagem</span>
                <MdOutlineFileUpload />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={carregarImagem}
                style={{ display: "none" }}
              />
            </label>
          </div>

        </div>

        <div className={styles.concordar}>
          <input type="checkbox" onChange={(e) => setConcordar(e.target.checked)}/>
          <p>
            Concordo com os <span style={{cursor: "pointer"}}>Termos de Uso</span>
          </p>
        </div>

        <div>
          <button onClick={salvarUsuario} className={styles.botaoFinalizar}>Finalizar Cadastro</button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
