// State argument references only the state the reducer is reponsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
