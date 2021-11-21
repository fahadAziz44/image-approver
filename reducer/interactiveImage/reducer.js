import * as types from './types'

const initialState = {
  image: null,
  loading: false,
  error: null
}

const imageInterActiveReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case types.GET_RANDOM_IMAGE_REQUEST:
    case types.APPROVE_IMAGE_REQUEST:
    case types.DISAPPROVE_IMAGE_REQUEST:
      return {...state, loading: true}
    case types.APPROVE_IMAGE_SUCCESS:
    case types.DISAPPROVE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case types.GET_RANDOM_IMAGE_ERROR:
    case types.APPROVE_IMAGE_ERROR:
    case types.DISAPPROVE_IMAGE_ERROR:
        return {
          ...state,
          loading: false,
          error: error instanceof Error ? error.message : error
        }
    case types.GET_RANDOM_IMAGE_SUCCESS:
    case types.SET_INTERACTIVE_IMAGE:
      return {
        ...state,
        loading: false,
        image: payload.image,
      }
    default:
      return state
  }
}


export default imageInterActiveReducer