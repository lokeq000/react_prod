import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/rpoviders/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return countter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
