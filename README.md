## Top-Down-React

Rendered components are controlled with state. This enables changing the hierarcy of rendered components dynamically. Also props that components receive are controlled by state.

### Info

Setup the initial rendering of components by editing .app in  `src/store/initialState.js`

Components are setup by following example:
```
{
  element: App, 
  // Where App is an component. 'Element' can also be any html tag -> 'div', 'p', ...
  
  props: [['data', 'people', 0, 'name'], ...], 
  // Declares a path to wanted prop. Accept multiple paths to props as arrays. Example equals state.data.people[0].name
  
  children: [
    {
      element: ...
      ...
    },
    ...
  ]
  // Children can be components presented in the same way as shown or just text
}
```

### Setup
```
yarn install
yarn start
```
