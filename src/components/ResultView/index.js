import {
  CustomImg,
  Result,
  ResultContainer,
  Heading,
  ResetButton,
  Choices,
  Option,
} from '../../styledComponents'

const ResultView = props => {
  const {userChoice, opponentChoice, status, onReset} = props

  return (
    <>
      <ResultContainer>
        <Result>
          <Heading>YOU</Heading>
          <CustomImg src={userChoice?.imageUrl} alt="your choice" />
        </Result>

        <Result>
          <Heading>OPPONENT</Heading>
          <CustomImg src={opponentChoice?.imageUrl} alt="opponent choice" />
        </Result>
      </ResultContainer>

      <Choices>
        <Option>{status}</Option>
        <ResetButton type="button" onClick={onReset}>
          PLAY AGAIN
        </ResetButton>
      </Choices>
    </>
  )
}

export default ResultView
