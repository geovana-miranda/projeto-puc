import styles from "./Quadro.module.css";

const Quadro = ({ quadros }) => {

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
          
        </li>
      ))}

      
    </>
  );
};

export default Quadro;
