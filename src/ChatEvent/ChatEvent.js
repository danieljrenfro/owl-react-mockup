import React, { Component } from 'react';
import { mockComponent } from 'react-dom/test-utils';

import './ChatEvent.css';

class ChatEvent extends Component {
  generateMessage(chat) {
    const participant = this.props.participant;
    const messageTime = new Date(chat.time);
    const timeString = messageTime.toLocaleString();
    
    return (
      <div>
        <div className="message-details">
          <img className="message-avatar" src={participant.avatar} alt={participant.name + " Avatar"}/>
          <h2 className="message-participant">{participant.name}</h2>
          <p className="message-time">{timeString}</p>
        </div>
        <p>{chat.message}</p>
      </div>
    )
  }

  generateReaction(chat) {
    const participant = this.props.participant;

    if (chat.type === 'thumbs-up' || chat.type === 'thumbs-down') {
      return <p>{participant.name} gave a {chat.type}</p>
    } else if (chat.type === 'raise-hand') {
      return <p>{participant.name} raised their hand</p>
    } else if (chat.type === 'clap') {
      return <p>{participant.name} clapped</p>
    } else if (chat.type === 'join') {
      return <p>{participant.name} has joined</p>
    } else if (chat.type === 'join-stage') {
      return <p>{participant.name} has joined the stage</p>
    } else if (chat.type === 'leave-stage') {
      return <p>{participant.name} has left the stage</p>
    }
  }

  generateEvent(chat) {
    if (chat.type === 'message') {
      return this.generateMessage(chat); 
    }
    return this.generateReaction(chat);
  }
  
  render() {
    return (
      <>
        {this.generateEvent(this.props.chat)}
      </>
    )
  }
}

export default ChatEvent;