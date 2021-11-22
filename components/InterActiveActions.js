import styled from 'styled-components'
import PropTypes from 'prop-types';
import { InteractiveButtonsWrapper } from './InterActiveActions.style'
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
