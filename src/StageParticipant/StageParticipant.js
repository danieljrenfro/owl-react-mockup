import React, { Component } from 'react';

import './StageParticipant.css';

class StageParticipant extends Component {
  render() {
    const participant = this.props.participant;

    return (
      <div className="stage-participant">
        <h2 className="stage-name">{participant.name}</h2>
        <img className="stage-avatar" src={participant.avatar} alt={participant.name + " Avatar"}/>
      </div>
    )
  }
}

export default StageParticipant;