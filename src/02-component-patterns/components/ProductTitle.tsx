import { useContext } from 'react';
import { ProductContext } from '../context';
import styles from '../styles/styles.module.css';

export interface Props {
  title?: string;
  className?: string;
}
/**
 * Componente del título de la imagen
 * @param param0
 * @returns
 */
export const ProductTitle = ({ title, className }: Props) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
