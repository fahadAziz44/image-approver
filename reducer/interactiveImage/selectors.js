import { createSelector } from '@reduxjs/toolkit'
import { selectImageListApproved } from '../imageList/selectors'

export const selectInteractiveImage = state => state.interactiveImage.image
export const selectIsInteractiveImageLoading = state => state.interactiveImage.loading
export const selectIfImagePresent = (imgId) => createSelector(selectImageListApproved, (approvedList) => {
  if(!imgId) { return false }
  const imageFound = approvedList.find((img) => img.id === imgId)
  return imageFound ? true : false
})