import {CustomButton, CustomImg} from '../../styledComponents'

const PlayingView = props => {
  const {choice, onSelect} = props
  const {id, imageUrl} = choice

  return (
    <CustomButton
      type="button"
      data-testid={`${id.toLowerCase()}Button`}
      onClick={() => onSelect(id)}
    >
      <CustomImg src={imageUrl} alt={id} />
    </CustomButton>
  )
}

export default PlayingView
