import React from 'react'
import EricImage from '../../images/x.png'
import DerbyPicks from '../../images/IMG_0162.png'
import EricWin from '../../images/IMG_0163.png'
import Stakes from '../../images/c.PNG'

export default () => (
  <div style={{ maxWidth: '100%', fontFamily: 'Grandstander' }}>
    <h1 style={{ fontSize: '130px', font: 'Comic Sans' }}>Ric's Picks</h1>
    <div>
      <img style={{ maxWidth: '100%', width: 'auto' }} src={Stakes} />
      <img style={{ maxWidth: '100%', width: 'auto' }} src={EricWin} />
      <img style={{ maxWidth: '100%', width: 'auto' }} src={DerbyPicks} />
      <img
        style={{ maxWidth: '100%', width: 'auto' }}
        src="https://media.giphy.com/media/tHJGFW5NxCFyMoSubY/giphy.gif"
      />
      <img style={{ maxWidth: '100%', width: 'auto' }} src={EricImage} />
      <img
        style={{ maxWidth: '100%', width: 'auto' }}
        src="https://media.giphy.com/media/TKRxCYjIecx7xWqRpb/giphy.gif"
      />
    </div>
  </div>
)
