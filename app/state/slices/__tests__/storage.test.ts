import storageReducer, {setHasUserSeenGuiding} from '../storage';

describe('testing of storage reducer ', () => {
  test('should return the initial state', () => {
    expect(storageReducer(undefined, {type: undefined})).toEqual({
      hasUserSeenGuiding: false,
    });
  });

  test('should set hasUserSeenGuiding properly', () => {
    expect(
      storageReducer({hasUserSeenGuiding: false}, setHasUserSeenGuiding(true)),
    ).toEqual({
      hasUserSeenGuiding: true,
    });
  });
});
