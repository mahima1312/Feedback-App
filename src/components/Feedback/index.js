import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className='feedback-container'>
        <h1 className='heading'>
          How satisfied are you with our customer support performance?
        </h1>
        <ul className='emojis-container'>
          {emojis.map(eachEmoji => (
            <li className='list-container' key={eachEmoji.id}>
              <button className='btn' onClick={this.onClickEmoji} type='button'>
                <img
                  className='image'
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                />
              </button>
              <p className='text'>{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    return (
      <div className='feedback-container'>
        <img
          className='love-emoji'
          src={resources.loveEmojiUrl}
          alt='love emoji'
        />
        <h1>Thank you!</h1>
        <p className='text'>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className='app-container'>
        {isFeedbackSelected
          ? this.renderThankYou()
          : this.renderFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
