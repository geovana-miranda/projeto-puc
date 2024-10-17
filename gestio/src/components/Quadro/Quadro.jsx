import styles from "./Quadro.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import ModalAlterarQuadro from "../Modal/ModalAlterarQuadro";

const Quadro = ({ quadros , setQuadros , usuarioAtual }) => {
  const [quadroSelecionado, setQuadroSelecionado] = useState("");
  const [abrirModalAlterar, setAbrirModalAlterar] = useState(false);

  return (
    <>
      {quadros.map((quadro) => (
        <li
          className={styles.itemLista}
          key={quadro.id}
        >
          <div className={styles.fotoTitulo}>
            <img
              src="https://cdn.blablacar.com/wp-content/uploads/br/2024/05/05094506/como-planejar-uma-viagem.webp"
              alt=""
            />
            <p>{quadro.titulo}</p>
          </div>
          <BsThreeDotsVertical
            className={styles.icone}
            onClick={() => {
              setAbrirModalAlterar(true);
              setQuadroSelecionado(quadro);
            }}
          />
          
        </li>
      ))}
      {abrirModalAlterar && (
        <ModalAlterarQuadro
          quadros={quadros}
          setQuadros={setQuadros}
          abrirModalAlterar={abrirModalAlterar}
          setAbrirModalAlterar={setAbrirModalAlterar}
          quadroSelecionado={quadroSelecionado}
        />
      )}

      
    </>
  );
};

export default Quadro;
