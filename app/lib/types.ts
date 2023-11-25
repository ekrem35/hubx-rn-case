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
    name: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface ICategoryResponse {
  data: ICategory[];
}

export type IQuestionResponse = IQuestion[];
