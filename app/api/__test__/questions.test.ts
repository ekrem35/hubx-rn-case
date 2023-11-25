import {IQuestionResponse} from 'lib/types';

import * as questionApi from '../questions';

import mockAxios from 'jest-mock-axios';

const mockSuccessResponse: IQuestionResponse = [
  {
    image_uri: 'https://google.com',
    order: 1,
    subtitle: 'subtitle',
    id: 1,
    title: 'title ',
    uri: 'https://google.com',
  },
];

describe('testing questions api functions', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('test getQuestions function', () => {
    it('(getQuestions) should return array of questions', async () => {
      mockAxios.get.mockResolvedValueOnce(Promise.resolve(mockSuccessResponse));

      const result = await questionApi.getAllQuestions();

      expect(mockAxios.get).toHaveBeenCalledWith('/getQuestions', {
        method: 'get',
      });

      expect(JSON.stringify(result)).toEqual(
        JSON.stringify(mockSuccessResponse),
      );
    });

    it('should reject error', async () => {
      const mockError = new Error('network error');
      mockAxios.get.mockResolvedValueOnce(Promise.reject(mockError));

      await expect(questionApi.getAllQuestions()).rejects.toThrow(
        mockError.message,
      );
    });
  });
});
