const initialState = {
    number: 123,
}; 

export default function globarReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD':
          return {...state, number: state.number + 1}
        case 'SUB':
          return {...state, number: state.number - 1}
        default:
          return state;
      }
}