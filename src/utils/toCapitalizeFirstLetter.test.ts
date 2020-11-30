import { toCapitalizeFirstLetter } from './toCapitalizeFirstLetter';

describe('hgetUrlWithParamsConfig', () => {
  test('it should take string and return capitalize string', () => {
    const capitalizedStr = toCapitalizeFirstLetter('aaaBBB');

    expect(capitalizedStr).toEqual('Aaabbb');
  });
});
