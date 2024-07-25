
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT,DECREMENT } from './Compnents/redux/action';

function App() {
  const counter  = useSelector(state => state.counter); //counter variable is teh actuall counter value in redux store
  const dispatch = useDispatch();
  return (
    <div className="App">
    <h4>Counter: {counter}</h4>
    <hr/>
    <div>
      <button onClick={() => dispatch({type: INCREMENT})}>increment</button>
      <button onClick={() => dispatch({type: DECREMENT})}>decrement</button>
    </div>
  </div>
  );
}

export default App;
