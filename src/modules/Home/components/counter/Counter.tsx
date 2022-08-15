import React from 'react';
import { useAppSelector, useAppDispatch } from 'reduxStore/hooks';
import { selectCount } from 'reduxStore/store';
import styles from './Counter.module.css';
import {
  decrement,
  increment,
  incrementByAmount,
  // incrementIfOdd,
} from '../../slice/counterSlice';

export default function Counter(): JSX.Element {
  const count = useAppSelector(selectCount);

  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          type="button"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>

        {/* <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button> */}
      </div>
    </div>
  );
}
