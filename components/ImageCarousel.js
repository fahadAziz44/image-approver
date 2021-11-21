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
        <ImageThumbs>
          {
            approvedImages && approvedImages.map((image) => (
              <ThumbContainer key={image.id} onClick={() => onImageClick(image)}>
                <Image
                  src={image.urls.small}
                  alt='image'
                  layout='fill'
                  objectFit="cover"
                  quality={100}
                  key={image.id}
                />
                </ThumbContainer>
            ))
          }
        </ImageThumbs>
      )}
    </ImageCarouselWrapper>
  )
}

export default ImageCarousel

const ImageCarouselWrapper = styled.div`
  height: 200px;
  padding: 20px 10px;
  display: flex;
`;

const ThumbContainer = styled.div`
    position: relative;
    min-width: 200px;
    max-width: 250px;
    cursor: pointer;
`

const ImageThumbs = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 10px;
    flex-wrap: nowrap;
    column-gap: 20px;
`