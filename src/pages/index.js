import React from 'react'
import Password from '../password'
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
import Derby23_1 from '../../images/Derby2023.png'
import Derby23_2 from '../../images/Derby2023-2.png'
import Derby_24 from '../../images/IMG_6177.jpg'

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
    <Password>
      <div>
        <img style={{ maxWidth: '100%', width: 'auto' }} src={Derby_24} />
        <div
          style={{
            fontSize: '24px',
            backgroundColor: 'rgba(256,256,256,0.8)',
            margin: '18px',
            padding: '18px',
          }}
        >
          <p>
            GOOD DAY RACERS! How the hell are ya, you came here for picks, so
            I’m gonna get right to it. 1 word for you guys today, SIERRA! (Frank
            Ocean voice). That's right, Sierra Leone.  This horse is hotter than
            a 2 dollar pistol.  I’m going all in on this bad boy today.  
          </p>

          <p>
            As far as other horses, the favorite is obviously Fierceness at 7/2
            but other than that, its pretty wide open. Lots of long shots so
            take your pick.  I tend to hate a favorite, but will throw him into
            some exactas.
          </p>

          <p>
            I’m liking Catalytic who was the runner up behind Fierceness in the
            Florida derby. Could see him on the board today. Great name too. 
          </p>

          <p>
            Another pick I like is the horse Forever Young, clearly the fastest
            horse in the mix, could be interesting.
          </p>

          <p>
            I always like a #1 horse too, this young steed Dornoch has had some
            great races, his last one he couldn’t fully fire, but the other 3 he
            came in 1st. Maybe he just stumbled a bit. He’s also the full
            brother to last year's winner Mage.  Hmmm interesting.  
          </p>

          <p>
            Okay that’s it for today, best of luck everyone. Now take your mint
            julep, raise it to the horizon, and thank god you’re alive on this
            cloudy but beautiful race day!
          </p>
        </div>
        <img style={{ maxWidth: '100%', width: 'auto' }} src={Derby23_1} />
        <img style={{ maxWidth: '100%', width: 'auto' }} src={Derby23_2} />
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
    </Password>
  </div>
)
