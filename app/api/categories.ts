import axiosInstance from './axios';

import {ICategoryResponse} from '../lib/types';

export async function getAllCategories() {
  const response = await axiosInstance.get<ICategoryResponse>(
    '/getCategories',
    {method: 'get'},
  );

  return response.data;
}
