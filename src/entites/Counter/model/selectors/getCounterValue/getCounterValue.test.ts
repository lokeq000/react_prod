import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/rpoviders/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounter', () => {
  test('should return countter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
