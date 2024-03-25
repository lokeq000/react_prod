import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { StateSchema } from 'app/rpoviders/StoreProvider/config/StateSchema';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProops {
}

export const Counter = (props: CounterProops) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>
        value =
        {counterValue}
      </h1>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
};
