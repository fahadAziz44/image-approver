import { combineReducers } from 'redux'
import imageListReducer from './imageList/reducer'
import interactiveImageReducer from './interactiveImage/reducer'

// COMBINED REDUCERS
const reducers = {
  imageList: imageListReducer,
  image: interactiveImageReducer,
}

export default combineReducers(reducers)
