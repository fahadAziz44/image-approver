import react, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import { selectIsInteractiveImageLoading, selectInteractiveImage } from '../reducer/imageList/selectors'
import { getImageList } from '../reducer/imageList/actions'
import Image from 'next/image'

const ImageCarousel = () => {
  const isLoading = useSelector(selectIsImageCarouselLoading)
  const selectedImage = useSelector(selectImageCarousel)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getImageList())
  }, [dispatch])
  
  return (
    <ImageCarouselWrapper>
      {isLoading && (
        <h1>Loading</h1>
      )}
      {!isLoading && selectedImage && selectedImage.urls && (
        <div className='inter-image-container'>
          <Image src={selectedImage.urls.small} alt='image' layout='fill' />
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
  & .image-item {
    width: 100px;
  }
`;