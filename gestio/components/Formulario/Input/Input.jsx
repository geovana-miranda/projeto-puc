import styles from "./Input.module.css";

const Input = ({label, type, placeholder}) => {
  return (
    <div className={styles.campoFormulario}>
      <label className={styles.label}>
        <span>{label}</span>
        <input type={type} required name={label} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default Input;
