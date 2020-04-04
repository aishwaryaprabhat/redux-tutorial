import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers'; //webpack automatically looks for index.js
import {increment} from './actions'

const store = createStore(allReducers);

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  return (

      <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button>-</button>
        {isLogged ? <h3>Logged In State</h3> : "Not logged in bro"}
        {/* <h3>Logged In State</h3> */}
      </div>
  );
}

export default App;
