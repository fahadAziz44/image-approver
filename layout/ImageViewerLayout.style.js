import styled from 'styled-components'

export const ImageViewerLayoutWrapper = styled.div`
  
  & .layout-heading {
    padding: 15px 20px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 5px;
    font-weight: bold;
  }
  
`
