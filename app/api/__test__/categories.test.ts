import {ICategoryResponse} from 'lib/types';

import * as categoryApi from '../categories';

import mockAxios from 'jest-mock-axios';

const mockSuccessResponse: ICategoryResponse = {
  data: [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 1,
      image: {
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 1,
        name: 'category image',
        url: 'https://google.com',
      },
      name: 'category 1',
      title: 'category 1',
      publishedAt: new Date(),
    },
  ],
};

describe('testing categories api functions', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe('test getCategories function', () => {
    it('(getCategories) should return array of categories', async () => {
      mockAxios.get.mockResolvedValueOnce(Promise.resolve(mockSuccessResponse));

      const result = await categoryApi.getAllCategories();

      expect(mockAxios.get).toHaveBeenCalledWith('/getCategories', {
        method: 'get',
      });

      expect(JSON.stringify({data: result})).toEqual(
        JSON.stringify(mockSuccessResponse),
      );
    });

    it('should reject error', async () => {
      const mockError = new Error('network error');
      mockAxios.get.mockResolvedValueOnce(Promise.reject(mockError));

      await expect(categoryApi.getAllCategories()).rejects.toThrow(
        mockError.message,
      );
    });
  });
});
