import * as actions from './actionType';

// Central Storage
const initState = {
  userData: {
    nameValue: '',
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
      return { ...state, userData: { ...action.payload } };
    case actions.CLOSE_MODAL:
      return { ...state, modal: { ...action.payload } };
    case actions.OPEN_MODAL:
      return { ...state, modal: { ...action.payload } };

    default:
      return state;
  }
};

export default reducer;
