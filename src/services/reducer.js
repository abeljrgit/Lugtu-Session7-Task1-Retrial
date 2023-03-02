import * as actions from './actionType';

// Central Storage
const initState = {
  userData: {
    nameValue: 'TEST',
    jobValue: '',
    idValue: '',
    createdAtValue: '',
  },
  modal: { visible: false, title: '', description: '' },
};

const reducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case actions.GET_USER_DATA:
      console.log(action.payload);
      return { ...state, userData: { ...action.payload } };
    default:
      return state;
  }
};

export default reducer;
