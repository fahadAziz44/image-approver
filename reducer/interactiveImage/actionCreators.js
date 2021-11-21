
import * as types from './types'

export const getRandomImageRequest = () => ({
  type: types.GET_RANDOM_IMAGE_REQUEST,
});

export const getRandomImageSuccess = (image) => ({
  type: types.GET_RANDOM_IMAGE_SUCCESS,
  payload: {
    image
  }
});

export const getRandomImageError = (error) => ({
  type: types.GET_RANDOM_IMAGE_ERROR,
  error
});


export const approveImageRequest = (imageId) => ({
  type: types.APPROVE_IMAGE_REQUEST,
  payload: {
    imageId,
  },
});

export const approveImageSuccess = (image) => ({
  type: types.APPROVE_IMAGE_SUCCESS,
  payload: {
    image,
  },
});
export const approveImageError = (error) => ({
  type: types.APPROVE_IMAGE_ERROR,
  error,
});

export const disaproveImageRequest = (imageId) => ({
  type: types.DISAPPROVE_IMAGE_REQUEST,
  payload: {
    imageId,
  },
});

export const disaproveImageSuccess = (image) => ({
  type: types.DISAPPROVE_IMAGE_SUCCESS,
  payload: {
    image,
  },
});

export const disaproveImageError = (error) => ({
  type: types.DISAPPROVE_IMAGE_Error,
  error
});