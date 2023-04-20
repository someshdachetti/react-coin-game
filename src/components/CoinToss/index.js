import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    toss: '',
    total: 0,
    heads: 0,
    Tails: 0,
  }

  TossTheCoin = () => {
    const {toss, total, heads, Tails} = this.state
    const randomToss = Math.ceil(Math.random() * 2)
    if (randomToss === 1) {
      this.setState(x => ({
        toss: randomToss,
        total: x.total + 1,
        heads: heads + 1,
      }))
    } else {
      this.setState(y => ({
        toss: randomToss,
        Tails: Tails + 1,
        total: y.total + 1,
      }))
    }
  }

  render() {
    const {toss, total, heads, Tails} = this.state
    const coinImage =
      toss === 1
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bgColor">
        <div className="whiteCard">
          <h1>coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={coinImage} alt="toss result" />
          <button onClick={this.TossTheCoin} type="button">
            Toss Coin
          </button>
          <div className="x">
            <p>Total:0 {total}</p>
            <p>Heads :0 {heads}</p>
            <p>Tails :0{Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
