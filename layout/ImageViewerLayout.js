
import { ImageViewerLayoutWrapper } from './ImageViewerLayout.style'

const ImageViewerLayout = ({ children }) => {
  return (
    <ImageViewerLayoutWrapper>
      <div className='layout-heading title'>
        IMAGE APPROVAL APPLICATION
      </div>
      <div>
        {children}
      </div>
    </ImageViewerLayoutWrapper>
  )
}


export default ImageViewerLayout
