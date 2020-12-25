import { getProportions, Size } from './functions';

test('it should correctly return proportions', () => {
  expect(getProportions({ width: 800 }, '4x3')).toStrictEqual<Size>({ width: 800, height: 600 });
  expect(getProportions({ height: 768 }, '4x3')).toStrictEqual<Size>({ width: 1024, height: 768 });
  expect(getProportions({ width: 2000 }, '16x9')).toStrictEqual<Size>({ width: 2000, height: 1125 });
  expect(getProportions({ height: 1687.5 }, '16x9')).toStrictEqual<Size>({ width: 3000, height: 1687.5 });
});
