import react, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import { selectIsImageListLoading, selectImageListApproved } from '../reducer/imageList/selectors'
import { getImageList } from '../reducer/imageList/actions'
import Image from 'next/image'
import { setInterActiveImage } from '../reducer/interactiveImage/actionCreators'

const ImageCarousel = () => {
  const isLoading = useSelector(selectIsImageListLoading)
  const approvedImages = useSelector(selectImageListApproved)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getImageList())
  }, [dispatch])
  
  const onImageClick = useCallback((image) => {
    dispatch(setInterActiveImage(image))
  }, [dispatch])
  return (
    <ImageCarouselWrapper>
      {isLoading && (
        <h1>Loading</h1>
      )}
      {!isLoading && approvedImages && (
        <div className='image-thumbs'>
          {
            approvedImages && approvedImages.map((image) => (
              <div className="thumb-container" key={image.id} onClick={() => onImageClick(image)}>
                <Image
                  src={image.urls.small}
                  alt='image'
                  layout='fill'
                  objectFit="cover"
                  quality={100}
                  key={image.id}
                />
                </div>
            ))
          }
        </div>
      )}
    </ImageCarouselWrapper>
  )
}

export default ImageCarousel

const ImageCarouselWrapper = styled.div`
  height: 200px;
  padding: 20px 10px;
  display: flex;
  & .image-thumbs {
    display: flex;
    overflow-x: auto;
    padding: 10px;
    flex-wrap: nowrap;
    column-gap: 20px;
  }
  & .thumb-container {
    position: relative;
    min-width: 200px;
    cursor: pointer;
  }
  & .image-item {
    width: 100px;
  }
`;