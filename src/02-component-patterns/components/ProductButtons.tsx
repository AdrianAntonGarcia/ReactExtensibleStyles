import { CSSProperties, useContext } from 'react';
import { ProductContext } from '../context';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}
/**
 * Componente de los botones del producto
 */
export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy } = useContext(ProductContext);
  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button
        className={styles.buttonMinus}
        onClick={() => {
          increaseBy(-1);
        }}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={styles.buttonAdd}
        onClick={() => {
          increaseBy(1);
        }}
      >
        +
      </button>
    </div>
  );
};
