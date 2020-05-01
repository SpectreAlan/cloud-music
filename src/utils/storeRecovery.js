import { fromJS } from 'immutable';

export const saveStore = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err)
  }
}

export const loadStore = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    } else {
      return fromJS(JSON.parse(serializedState));
    }
  } catch (err) {
    console.log(err)
    return undefined;
  }
}
