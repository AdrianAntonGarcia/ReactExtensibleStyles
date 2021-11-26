import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from '../context';
import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  className?: string;
}
/**
 * Componente de la imagen del producto
 * @param param0
 * @returns
 */
export const ProductImage = ({ img = '', className }: Props) => {
  const { product } = useContext(ProductContext);
  let imageToShow;
  if (img) {
    imageToShow = img;
  } else if (product.img) {
    imageToShow = product.img;
  } else {
    imageToShow = noImage;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imageToShow}
      alt="Product"
    />
  );
};
