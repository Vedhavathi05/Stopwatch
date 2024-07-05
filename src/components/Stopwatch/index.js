import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    isTimerRunning: false,
  }

  resetTimer = () => {
    this.setState({
      seconds: 0,
      minutes: 0,
      isTimerRunning: false,
    })
    clearInterval(this.uniqueId)
  }

  startTimer = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.uniqueId = setInterval(this.increaseSeconds, 1000)
      this.setState({isTimerRunning: true})
    }
  }

  increaseSeconds = () => {
    const {seconds} = this.state

    if (seconds < 59) {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
      }))
    } else {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 0,
      }))
    }
  }

  stopTimer = () => {
    clearInterval(this.uniqueId)
    this.setState({isTimerRunning: false})
  }

  modifysec = seconds => {
    const modified = seconds > 9 ? seconds : `0${seconds}`
    return modified
  }

  modifymin = minutes => {
    const modified = minutes > 9 ? minutes : `0${minutes}`
    return modified
  }

  render() {
    const {seconds, minutes} = this.state
    const modifiedSeconds = this.modifysec(seconds)
    const modifiedMinutes = this.modifymin(minutes)
    return (
      <div className="bg-container">
        <h1 className="heading-styling">Stopwatch</h1>
        <div className="TimeBox">
          <div className="TimerContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image-styling"
            />
            <p className="paragraph">Timer</p>
          </div>
          <h1 className="timer-styling">
            {modifiedMinutes}:{modifiedSeconds}
          </h1>
          <div className="TimerContainer">
            <button
              type="button"
              className="button-styling button1"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button-styling button2"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button-styling button3"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
