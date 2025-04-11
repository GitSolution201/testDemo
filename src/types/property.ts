import {ImageSourcePropType} from 'react-native';

export interface Property {
  id: string;
  title: string;
  location: string;
  images: ImageSourcePropType[];
  price: number;
  currency: string;
  rating: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  isFeatured: boolean;
}

export interface PropertyCardProps extends Omit<Property, 'id'> {
  onRent?: () => void;
  onShare?: () => void;
  onLike?: (isLiked: boolean) => void;
} 