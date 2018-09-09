import App from '../components/app/App'

export default {
  app: {
    element: App,
    props: [['data', 'people', 1, 'name']],
    children: []
  },
  data: {
    people: [
      { name: 'Tom' },
      { name: 'Upu' }
    ]
  }
}
