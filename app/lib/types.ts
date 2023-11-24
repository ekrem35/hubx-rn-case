export interface INavigation {
  navigate: (route: string, params?: any) => void;
}

export interface IQuestion {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  order: number;
  uri: string;
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  title: string;
  image: {
    id: number;
    name: Date;
    url: 'https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png';
    createdAt: Date;
    updatedAt: Date;
  };
}
