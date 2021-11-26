import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, className }: ProductCardProps): JSX.Element;
  Title: ({ title, className }: ProductTitleProps) => JSX.Element;
  Image: ({ img, className }: ProductImageProps) => JSX.Element;
  Buttons: () => JSX.Element;
}
