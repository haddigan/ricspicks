import React from 'react'
import EricImage from '../../images/x.png'
import DerbyPicks from '../../images/IMG_0162.png'
import EricWin from '../../images/IMG_0163.png'
import Stakes from '../../images/c.png'
import EricCowboyHat from '../../images/bighat.jpg'
import Derby from '../../images/derby.png'
import Derby22 from '../../images/22-derby.png'
import CrazyFace from '../../images/unnamed.jpg'
import Preakness from '../../images/preakness.png'
import RunningHorse from '../../images/animated-horse-gif-11.gif'
import Belmont22 from '../../images/Belmont2022.jpg'

export default () => (
  <div
    style={{
      maxWidth: '100%',
      fontFamily: 'Grandstander',
      backgroundImage: `url(${EricCowboyHat})`,
    }}
  >
    <h1 style={{ fontSize: '130px', font: 'Comic Sans', marginTop: '0' }}>
      Ric's Picks
    </h1>
    <div>
      <img style={{ maxWidth: '100%', width: 'auto' }} src={Belmont22} />
      <img style={{ maxWidth: '100%', width: 'auto' }} src={Preakness} />
      <img style={{ maxWidth: '100%', width: 'auto' }} src={RunningHorse} />
      <img style={{ maxWidth: '100%', width: 'auto' }} src={Derby22} />
      <img style={{ maxWidth: '100%', width: 'auto' }} src={CrazyFace} />
      <img
        style={{
          maxWidth: '100%',
          width: '90%',
          padding: '5%',
          display: 'inline-block',
        }}
        src={Derby}
      />
      <img style={{ maxWidth: '100%', width: 'auto' }} src={EricCowboyHat} />
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
