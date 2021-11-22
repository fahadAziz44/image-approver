import styled from 'styled-components'


export const InteractiveButtonsWrapper = styled.div`
  width: 90%;
  max-width: 600px;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin-top: 30px;
  padding: 30px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  & .interactive-actions {
    width: 90%;
    display: flex;
    justify-content: space-around;
  }
`;

export const ActionButton = styled.div`
  background-color: ${props => props.primary ? '#5a6fe9' : '#454545'};
  color: white;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
`