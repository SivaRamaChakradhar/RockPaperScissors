import {Component} from 'react'

import ScoreBoard from '../ScoreBoard'
import PlayingView from '../PlayingView'
import ResultView from '../ResultView'
import Rules from '../Rules'

import {
  CustomBackground,
  ChoicesContainer,
  CenterWrapper,
  Heading,
  PopUpContainer,
} from '../../styledComponents'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    isGameOver: false,
    userChoice: {},
    opponentChoice: {},
    status: '',
  }

  playGame = choiceId => {
    const {choicesList} = this.props
    const {score} = this.state

    const userChoice = choicesList.find(c => c.id === choiceId)

    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    const winRules = {
      ROCK: 'SCISSORS',
      PAPER: 'ROCK',
      SCISSORS: 'PAPER',
    }

    let status = 'DRAW'
    let newScore = score

    if (userChoice.id === opponentChoice.id) {
      status = 'IT IS DRAW'
    } else if (winRules[userChoice.id] === opponentChoice.id) {
      status = 'YOU WON'
      newScore += 1
    } else {
      status = 'YOU LOSE'
      newScore -= 1
    }

    this.setState({
      userChoice,
      opponentChoice,
      status,
      score: newScore,
      isGameOver: true,
    })
  }

  resetGame = () => {
    this.setState({
      isGameOver: false,
      userChoice: {},
      opponentChoice: {},
      status: '',
    })
  }

  render() {
    const {choicesList} = this.props
    const {score, isGameOver, userChoice, opponentChoice, status} = this.state

    return (
      <CustomBackground>
        <Heading>Rock Paper Scissors</Heading>

        <ScoreBoard score={score} />

        <CenterWrapper>
          <ChoicesContainer>
            {isGameOver ? (
              <ResultView
                userChoice={userChoice}
                opponentChoice={opponentChoice}
                status={status}
                onReset={this.resetGame}
              />
            ) : (
              choicesList.map(eachChoice => (
                <PlayingView
                  key={eachChoice.id}
                  choice={eachChoice}
                  onSelect={this.playGame}
                />
              ))
            )}
          </ChoicesContainer>
        </CenterWrapper>

        <PopUpContainer>
          <Rules />
        </PopUpContainer>
      </CustomBackground>
    )
  }
}

export default RockPaperScissors
