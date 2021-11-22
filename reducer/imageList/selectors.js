import { createSelector } from '@reduxjs/toolkit'

export const selectIsImageListLoading = state => state.imageList.loading
export const selectImageListApproved = state => state.imageList.approvedImages
export const selectImageListUnApproved = state => state.imageList.unApprovedImages
export const selectApprovedImageListLength = createSelector(selectImageListApproved, (approvedList) => approvedList ? approvedList.length : 0)