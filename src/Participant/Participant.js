import React, { Component } from 'react';

import './Participant.css';

class Participant extends Component {
  
  participantStatus(participant) {
    if (participant.onStage) {
      return <p className="status-text">on stage</p>;
    } else if (participant.inSession) {
      return <p className="status-text">in session</p>;
    } else {
      return <p className="status-text">left session</p>
    }
  }

  participantColorIndicator(participant) {
    if (participant.inSession) {
      return <span className="dot green-dot"></span>;
    } else {
      return <span className="dot grey-dot"></span>;
    }
  }
  
  render() {
    const participant = this.props.participant;

    return (
      <div className="participant">
        <img className="avatar" src={participant.avatar} alt={participant.name + " Avatar"}/>
        <div className='participant-data'>
          <h2 className="participant-name">{participant.name}</h2>
          <div className="status">
            {this.participantColorIndicator(participant)}
            {this.participantStatus(participant)}
          </div>
        </div>
      </div>
    )
  }
}

export default Participant;