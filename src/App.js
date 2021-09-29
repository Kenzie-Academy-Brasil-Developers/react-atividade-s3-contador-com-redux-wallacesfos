import './App.css';
import { useDispatch } from "react-redux";
import { Subtract, Add } from "./store/modules/counter/action";
import {useSelector} from 'react-redux'



function App() {
  const dispatch = useDispatch();

  const handleClickSubtract = () => {
    dispatch(Subtract());
  }
  const handleClickAdd = () => {
    dispatch(Add());
  }

  const result = useSelector((store) => store.result)

  return (
    <div className="App">
      <header className="App-header">

        <div>{result}</div>
        <div className="botaum">
          <button onClick={handleClickAdd}>+</button>
          <button onClick={handleClickSubtract}>-</button>
        </div>

      </header>
    </div>
  );
}

export default App;
