const initialState = {
    person: 123,
}; 

export default function homeReducer(state=initialState, action) {
    switch (action.type) {
        case 'Add':
        return {...state, person: state.person + 1}
        default:
          return state;
      }
}