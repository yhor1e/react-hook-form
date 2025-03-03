import { deepMerge } from './deepMerge';

describe('deepMerge', () => {
  it('should deep merge object correctly', () => {
    expect(
      deepMerge(
        { test: { value: 1, data: { test: 1 } } },
        { test: { value2: 2 } },
      ),
    ).toEqual({
      test: { value: 1, value2: 2, data: { test: 1 } },
    });

    expect(deepMerge({ test: { value: 1 } }, {})).toEqual({
      test: { value: 1 },
    });

    expect(deepMerge({}, { test: [{ value: '1' }] })).toEqual({
      test: [{ value: '1' }],
    });

    expect(deepMerge({ data: {} }, { test: [{ value: '1' }] })).toEqual({
      data: {},
      test: [{ value: '1' }],
    });
  });

  it('should overwrite array value ', () => {
    expect(
      deepMerge({ test: [{ value: '2' }] }, { test: [{ value: '1' }] }),
    ).toEqual({
      test: [{ value: '1' }],
    });
  });

  it('should overwrite different data type', () => {
    expect(deepMerge({ test: [{ value: '2' }] }, { test: {} })).toEqual({
      test: {},
    });
  });
});
