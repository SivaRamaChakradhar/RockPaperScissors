import {
  ScoreCard,
  Option,
  Choices,
  Score,
  ScoreValue,
} from '../../styledComponents'

const ScoreBoard = props => {
  const {score} = props

  return (
    <ScoreCard>
      <Choices>
        <Option>Rock</Option>
        <Option>Paper</Option>
        <Option>Scissors</Option>
      </Choices>

      <Score>
        <Option color="#223a5f" fontWeight={400}>
          Score
        </Option>
        <ScoreValue>{score}</ScoreValue>
      </Score>
    </ScoreCard>
  )
}

export default ScoreBoard
