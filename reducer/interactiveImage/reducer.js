import * as types from './types'

const initialState = {
  image: null,
  fetching: false,
  error: null
}

const imageInterActiveReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case types.GET_RANDOM_IMAGE_REQUEST:
    case types.APPROVE_IMAGE_REQUEST:
    case types.DISAPPROVE_IMAGE_REQUEST:
      return {...state, fetching: true}
    case types.APPROVE_IMAGE_SUCCESS:
    case types.DISAPPROVE_IMAGE_SUCCESS:
      return {
        ...state,
        fetching: false,
      }
    case types.GET_RANDOM_IMAGE_ERROR:
    case types.APPROVE_IMAGE_ERROR:
    case types.DISAPPROVE_IMAGE_ERROR:
        return {
          ...state,
          fetching: false,
          error: error instanceof Error ? error.message : error
        }
    case types.GET_RANDOM_IMAGE_SUCCESS:
      return {
        ...state,
        fetching: false,
        image: payload.image,
      }
    default:
      return state
  }
}


export default imageInterActiveReducer