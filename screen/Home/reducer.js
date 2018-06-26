const initialState = {
    list: 123,
}; 

export default function homeReducer(state=initialState, action) {
    switch (action.type) {
        case 'Add':
        return {...state, list: state.list + 1}
        default:
          return state;
      }
}