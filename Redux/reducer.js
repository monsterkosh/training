const { createStore } = require('redux');

const users = ['a', 'e', 'i'];

function reducer(state = users, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.name];
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'add',
  name: 'pepe',
});
