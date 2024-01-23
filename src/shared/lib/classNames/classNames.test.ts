import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with mod param', () => {
    expect(classNames('someClass', { someClassAdditionaly: true })).toBe('someClass someClassAdditionaly');
  });
  test('with additionaly and mod param ', () => {
    expect(classNames('someClass', { someClassMod: true }, ['someClassAddit'])).toBe('someClass someClassMod someClassAddit');
  });
});
