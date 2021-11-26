import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { Product } from '../interfaces';
import { ProductContext } from '../context';
import { ReactElement } from 'react';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

/**
 * Componente que devuelve la tarjeta de un producto
 * @param param0
 * @returns
 */
export const ProductCard = ({ children, product, className }: Props) => {
  const { Provider } = ProductContext;
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
