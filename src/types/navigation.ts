import {Property} from './property';

export type RootStackParamList = {
  Home: undefined;
  PropertyDetails: {property: Property};
  Profile: undefined;
  Favorites: undefined;
  Settings: undefined;
};

export type BottomTabParamList = {
  HomeTab: undefined;
  FavoritesTab: undefined;
  ProfileTab: undefined;
  SettingsTab: undefined;
}; 