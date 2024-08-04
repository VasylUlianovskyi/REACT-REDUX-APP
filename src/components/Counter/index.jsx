import { connect } from "react-redux";
import {
  decrement,
  increment,
  setStep,
} from "./../../store/slices/counterSlice";

function Counter({ count, step, dispatch }) {
  const dec = () => {
    const action = decrement();
    dispatch(action);
  };

  const inc = () => {
    const action = increment();
    dispatch(action);
  };

  const changeStep = ({ target: { value } }) => {
    const action = setStep(Number(value));
    dispatch(action);
  };

  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
      <div>
        <input type="number" value={step} onChange={changeStep} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state.counter;
}

const withAccessToStore = connect(mapStateToProps);

export default withAccessToStore(Counter);
