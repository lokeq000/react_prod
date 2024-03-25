import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/rpoviders/StoreProvider';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(getCounter, (counter) => counter.value);
