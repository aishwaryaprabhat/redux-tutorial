# Redux Tutorial/Cheat Sheet

## Getting started

- Create react app `npx create-react-app redux-tutorial`
- Install the redux package and react-redux, which helps to connect react and redux `npm install redux react-redux`


## Store
- Store is basically a storage for all the states of the whole app
- A globalized state storage place

## Action
- Describes what you want to do 
- A function that returns an object

```
//Action -> Incremement
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
```

## Reducer
- Looks at action and decides how state of the app changes by talking to the store

## Dispatch
- Execute the action by sending action to the reducer