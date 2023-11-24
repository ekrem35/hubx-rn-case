import axiosInstance from './axios';

import {IQuestion} from '../lib/types';

export async function getAllQuestions() {
  const response = await axiosInstance.get<IQuestion[]>('/getQuestions', {
    method: 'get',
  });

  return response.data;
}
