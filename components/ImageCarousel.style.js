import styled from 'styled-components'

export const ImageCarouselWrapper = styled.div`
height: 200px;
padding: 20px 10px;
display: flex;
`;

export const ThumbContainer = styled.div`
  position: relative;
  min-width: 200px;
  max-width: 250px;
  cursor: pointer;
`

export const ImageThumbs = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
  flex-wrap: nowrap;
  column-gap: 20px;
`

export const AddImageContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
background-color: #eff2f7;
cursor: pointer;
`