import { connect } from "react-redux";

function Counter({ count, step, dispatch }) {
  const dec = () => {
    const action = { type: "decrement" };
    dispatch(action);
  };

  const inc = () => {
    const action = { type: "increment" };
    dispatch(action);
  };

  const setStep = ({ target: { value } }) => {
    const action = { type: "setStep", payload: Number(value) };
    dispatch(action);
  };

  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
      <div>
        <input type="number" value={step} onChange={setStep} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

const withAccessToStore = connect(mapStateToProps);

export default withAccessToStore(Counter);
