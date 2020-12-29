import React, { Component } from 'react';

import ChatEvent from '../ChatEvent/ChatEvent';
import participants from '../participant-list';
import chatLog from '../chat-log';

import './ChatPanel.css';

class ChatPanel extends Component {
  render() {
    const events = chatLog.map(chat => {
      const eventParticipant = participants.find(participant => participant.id === chat.participantId);
      
      return <ChatEvent participant={eventParticipant} chat={chat}/>
    })

    return (
      <section className="user-chats">
        {events}
      </section>
    )
  }
}

export default ChatPanel;