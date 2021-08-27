import React from 'react';

const EventInfoBox = ({ info }) => {
  return (
    <div className='eventInfoBox'>
      <h2>Event Location Info</h2>
      <ul>
        <li>ID: {info.id}</li>
        <li>Title: {info.title}</li>
        {info.description && <li>Description: {info.description}</li>}
        <li>Link: {info.link}</li>
      </ul>
    </div>
  );
};

export default EventInfoBox;
