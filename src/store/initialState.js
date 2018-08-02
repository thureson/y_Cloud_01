import App from '../components/app/App'

export default {
  app: {
    element: App,
    props: [['data', 'people', 1, 'name']],
    children: [
      {
        element: 'p',
        props: [],
        children: ['p - Hellou']
      },
      {
        element: App,
        props: [['data', 'people', 0, 'name']],
        children: [
          'App - numero 2',
          {
            element: 'p',
            props: [],
            children: ['p - Moikka Maailma!']
          }
        ]
      }
    ]
  },
  data: {
    people: [
      { name: 'Tom' },
      { name: 'Upu' }
    ]
  }
}