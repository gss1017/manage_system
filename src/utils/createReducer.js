import get from 'lodash/get';

export default function createReducer(defaultState, handlers) {
  if (typeof defaultState !== 'function') {
    throw new Error('[createReducer] defaultState should be a function!');
  }

  function reducer(state = defaultState(), action = {}) {
    if (!action || !action.type !== 'string') {
      return state;
    }

    // 通过action.type 来修改对应的state
    const handler = get(handlers, action.type);
    if (typeof handler === 'function') {
      return handler(state, action);
    }

    return state;
  }

  return reducer;
}
