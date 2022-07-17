import './index.css'

const GameResultsView = props => {
  const {choicesList, checkResult, isShow, newArray, text, restartGame} = props

  const showGame = () => (
    <div className="game-view-container">
      <div className="two-image-container">
        <button
          data-testid="rockButton"
          type="button"
          className="img-btn"
          onClick={() => checkResult(choicesList[0].id)}
        >
          <img
            className="game-img"
            src={choicesList[0].imageUrl}
            alt={choicesList[0].id}
            key={choicesList[0].id}
          />
        </button>
        <button
          data-testid="scissorsButton"
          type="button"
          className="img-btn"
          onClick={() => checkResult(choicesList[1].id)}
        >
          <img
            className="game-img"
            src={choicesList[1].imageUrl}
            alt={choicesList[1].id}
            key={choicesList[1].id}
          />
        </button>
      </div>
      <button
        data-testid="paperButton"
        type="button"
        className="img-btn"
        onClick={() => checkResult(choicesList[2].id)}
      >
        <img
          className="game-img"
          src={choicesList[2].imageUrl}
          alt={choicesList[2].id}
          key={choicesList[2].id}
        />
      </button>
    </div>
  )

  const renderResultView = () => (
    <div className="app-result-container">
      <div className="result-container">
        <div className="you-container">
          <p className="you">YOU</p>
          <img
            src={newArray[0].imageUrl}
            className="game-img"
            alt="your choice"
          />
        </div>
        <div className="you-container">
          <p className="you">OPPONENT</p>
          <img
            src={newArray[1].imageUrl}
            className="game-img"
            alt="opponent choice"
          />
        </div>
      </div>
      <p className="result-label">{text}</p>
      <button className="result-button" type="button" onClick={restartGame}>
        PLAY AGAIN
      </button>
    </div>
  )

  return (
    <div className="game-view-app-container">
      {isShow ? showGame() : renderResultView()}
    </div>
  )
}
export default GameResultsView
