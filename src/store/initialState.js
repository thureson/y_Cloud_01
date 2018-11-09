import App from '../components/app/App'
import Controls from '../components/controls/Controls';

export default {
  app: {
    element: App,
    props: [['data', 'people', 1, 'name']],
    children: [
      {
        element: Controls,
        props: [['data', 'controls', 'selectedBtn']],
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
      selectedBtn: 'first'
    }
  }
}
