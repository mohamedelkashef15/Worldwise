import { IButton } from "./interfaces";
import styles from "./Button.module.css";

function Button({ onClick, type, children }: IButton) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
