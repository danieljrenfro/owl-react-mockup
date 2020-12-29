import React, { Component } from 'react';
import participants from '../participant-list';
import Participant from '../Participant/Participant';

import './ParticipantList.css';

class ParticipantList extends Component {
  render() {
    const inSessionParticipants = participants.map(p => {
      if (p.inSession) {
        return <Participant key={p.id} participant={p}/>;
      }
      return '';
    }) 
    const outOfSessionParticipants = participants.map(p => {
      if (!p.inSession) {
        return <Participant key={p.id} participant={p}/>;
      }
      return '';
    }) 

    return (
      <section className="participant-list">
        {inSessionParticipants}
        {outOfSessionParticipants}
      </section>
    )
  }
}

export default ParticipantList;