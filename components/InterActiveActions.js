import react, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import { selectIsInteractiveImageLoading, selectInteractiveImage } from '../reducer/interactiveImage/selectors'
import Image from 'next/image'
import PropTypes from 'prop-types';

const InteractiveActions = ({ onApprove, onDisApprove }) => {
  return (
    <InteractiveButtonsWrapper>
      <div className='interactive-actions'>
        <button onClick={onApprove}> Approve </button>
        <button onClick={onDisApprove}> DisApprove </button>
      </div>
    </InteractiveButtonsWrapper>
  )
}

InteractiveActions.prototype = {
  onApprove: PropTypes.func,
  onDisApprove: PropTypes.func,
}

export default InteractiveActions

const InteractiveButtonsWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  & .interactive-actions {
    width: 90%;
    display: flex;
    justify-content: space-around;
  }
`;