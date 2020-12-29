import React, { Component } from 'react';

import participants from '../participant-list';
import StageParticipant from '../StageParticipant/StageParticipant';

import './Stage.css';

class Stage extends Component {
  render() {
    const stageParticipants = participants.map(p => {
      if (p.onStage && !p.currentUser) {
        return <StageParticipant key={p.id} participant={p}/>;
      }
      return '';
    })

    const currentUser = participants.find(p => p.currentUser);

    return (
      <>
        <section className="stage">
          {stageParticipants}
          <div className="current-user">
            <img className="current-user-avatar" src={currentUser.avatar} alt={currentUser.name + " Avatar"}/>
          </div>
        </section>
      </>
    )
  }
}

export default Stage;