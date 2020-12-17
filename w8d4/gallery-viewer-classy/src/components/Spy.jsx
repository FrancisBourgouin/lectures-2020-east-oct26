import { Component } from 'react'

export default class Spy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }

  reportOnPosition = function (event) {
    this.setState({ x: event.clientX, y: event.clientY })
  }

  componentDidMount() {
    console.log("SPY HAS ARRIVED MWAHAHAHAHA")
    document.addEventListener('click', this.reportOnPosition)
  }

  componentWillUnmount() {
    console.log("SPY HAS BEEN FOUND! ABORT!")
    document.removeEventListener('click', this.reportOnPosition)
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.x !== this.state.x || oldState.y !== this.state.y) {
      console.log(this.state.x, this.state.y)
    }
  }

  render() {
    return <p
      style={{ position: "absolute", color: "black", top: 0, left: 0, fontSize: "10px" }}
      onClick={this.props.deleteSpy}
    >
      I AM A SPY
        </p>
  }
}