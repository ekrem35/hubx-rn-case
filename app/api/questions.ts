import axiosInstance from './axios';

import {IQuestionResponse} from '../lib/types';

export async function getAllQuestions() {
  const response = await axiosInstance.get<IQuestionResponse>('/getQuestions', {
    method: 'get',
  });

  return response;
}
