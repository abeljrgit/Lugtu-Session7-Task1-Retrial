import axios from 'axios';
import * as actions from './actionType';

export const onGetUserData = (nameValue, jobValue) => {
  return (dispatch) => {
    let nameTemp = '';
    let jobTemp = '';
    let idTemp = '';
    let createdAtTemp = '';

    axios
      .post('https://reqres.in/api/users', {
        name: nameValue,
        job: jobValue,
      })
      .then((res) => {
        nameTemp = res?.data?.name ?? '';
        jobTemp = res?.data?.job ?? '';
        idTemp = res?.data?.id ?? '';
        createdAtTemp = res?.data?.createdAt ?? '';

        dispatch(
          ((data) => {
            return {
              type: actions.GET_USER_DATA,
              payload: {
                nameValue: nameTemp,
                jobValue: jobTemp,
                idValue: idTemp,
                createdAtValue: createdAtTemp,
              },
            };
          })(res.data)
        );
      })
      .catch((err) => {});
  };
};
