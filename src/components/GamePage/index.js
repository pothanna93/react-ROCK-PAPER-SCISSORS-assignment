import {Component} from 'react'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import GameResultsView from '../GameResultsView'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GamePage extends Component {
  state = {
    score: 0,
    isShow: true,
    newArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => {
    this.setState({isShow: true})
  }

  checkResult = id => {
    const {score} = this.state
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const choice1 = choicesList.filter(item => item.id === id)
    const result = this.getResult(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isShow: false,
      score: newScore,
      text: result,
      newArray: [choice1[0], choice2],
    })
  }

  renderRulesView = () => (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="rules-btn">
            RULES
          </button>
        }
      >
        {close => (
          <div className="model-container">
            <button
              type="button"
              testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-img"
              />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )

  render() {
    const {score, isShow, text, newArray} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="score-card-container">
            <div className="rock-paper-scissors-container">
              <h1 className="element-name">ROCK</h1>
              <h1 className="element-name">PAPER</h1>
              <h1 className="element-name">SCISSORS</h1>
            </div>
            <div className="score-container">
              <p className="element-score">Score</p>
              <p className="element-score-value">{score}</p>
            </div>
          </div>
          <GameResultsView
            choicesList={choicesList}
            checkResult={this.checkResult}
            isShow={isShow}
            text={text}
            newArray={newArray}
            restartGame={this.restartGame}
          />
        </div>
        <div className="rules-button-container">{this.renderRulesView()}</div>
      </div>
    )
  }
}
export default GamePage
