import React from 'react';
import EricImage from '../../images/x.png'

export default () => (
  <div>
    <h1 style={{fontSize: "200px", font: 'Comic Sans'}}>Ric's Picks</h1>
    <div>
      <img src="https://media.giphy.com/media/tHJGFW5NxCFyMoSubY/giphy.gif" />
      <img src={EricImage} />
      <img src="https://media.giphy.com/media/TKRxCYjIecx7xWqRpb/giphy.gif" />
    </div>
  </div>
);