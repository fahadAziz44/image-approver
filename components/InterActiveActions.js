import PropTypes from 'prop-types';
import { InteractiveButtonsWrapper, ActionButton } from './InterActiveActions.style'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
const InteractiveActions = ({ onApprove, onDisApprove }) => {
  return (
    <InteractiveButtonsWrapper>
      <div className='interactive-actions'>
        <ActionButton onClick={onDisApprove}> <AiOutlineClose size={30} color='white' /> </ActionButton>
        <ActionButton primary onClick={onApprove}> <AiOutlineCheck size={30} color='white' /> </ActionButton>
      </div>
    </InteractiveButtonsWrapper>
  )
}

InteractiveActions.prototype = {
  onApprove: PropTypes.func,
  onDisApprove: PropTypes.func,
}

export default InteractiveActions
