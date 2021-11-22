import { dbAddImageToApproved, dbAddImageToUnApproved, getAllImageKeys } from '../../db'
import { addToApprovedImages, addToUnApprovedImages } from '../imageList/actionCreators'
import {
  getRandomImageRequest, getRandomImageSuccess, getRandomImageError,
  approveImageRequest, approveImageSuccess, approveImageError,
  disapproveImageRequest, disapproveImageSuccess, disapproveImageError,
} from './actionCreators'


export const getRandomImage = () => async(dispatch) => {
  dispatch(getRandomImageRequest())
  try {
    const imagesViewed = await getAllImageKeys()
    let imagePresent = true
    let res = null
    while(imagePresent) {
      res = await fetch(`${process.env.NEXT_PUBLIC_UNSPLASH_ADDRESS}/photos/random`, {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`
        }
      }).then((resp) => resp.json())
      if (imagesViewed.indexOf(res.id) > -1) {
        imagePresent = true
      } else {
        imagePresent = false
      }
    }
    dispatch(getRandomImageSuccess(res))
  } catch(err) {
    dispatch(getRandomImageError(err))
  }
}

export const approveImage = (image) => async(dispatch) => {
  dispatch(approveImageRequest())
  try {
    await dbAddImageToApproved(image)
    dispatch(approveImageSuccess(image))
    dispatch(addToApprovedImages(image))
    dispatch(getRandomImage())
  } catch(err) {
    dispatch(approveImageError(err))
  }
}


export const unApproveImage = (image) => async(dispatch) => {
  dispatch(disapproveImageRequest())
  try {
    await dbAddImageToUnApproved(image)
    dispatch(disapproveImageSuccess(image))
    dispatch(addToUnApprovedImages(image))
    dispatch(getRandomImage())
  } catch(err) {
    dispatch(disapproveImageError(err))
  }
}