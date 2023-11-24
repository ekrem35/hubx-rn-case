import axiosInstance from './axios';

import {ICategory} from '../lib/types';

export async function getAllCategories() {
  const response = await axiosInstance.get<{data: ICategory[]}>(
    '/getCategories',
    {
      method: 'get',
    },
  );

  return response.data.data;
}
