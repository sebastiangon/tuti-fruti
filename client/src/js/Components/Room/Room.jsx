import React from 'react';
import Style from './Room.css';

export default class Room extends React.Component{

  handleCLick(){
    this.props.joinRoom(this.props.room);
  }

  render(){
    return(
      <div className="roomList-room">
        <div className="roomName">
          {this.props.room.name}
        </div>
        <div className="roomControls">
          <button className="room-btn room-enter-btn" onClick={this.handleCLick.bind(this)}>play</button>
          <button className="room-btn room-delete-btn">&times;</button>
        </div>
      </div>
    );
  }
}
