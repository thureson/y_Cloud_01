import App from '../components/app/App'
import Controls from '../components/controls/Controls';
import Player from '../components/player/Player';

export default {
  app: {
    element: App,
    props: [['data', 'people', 1, 'name']],
    children: [
      {
        element: Controls,
        props: [['data', 'controls', 'selectedBtn']],
        children: []
      },
      {
        element: Player,
        props: [
          ['data', 'player', 'position', 'x'],
          ['data', 'player', 'position', 'y'],
          ['data', 'player', 'config', 'speed']
        ],
        children: []
      }
    ]
  },
  data: {
    people: [
      { name: 'Tom' },
      { name: 'Upu' }
    ],
    controls: {
      inputs: {},
      selectedBtn: 'first'
    },
    player: {
      position: {
        x: 0,
        y: 0
      },
      config: {
        speed: 1
      }
    }
  }
}
