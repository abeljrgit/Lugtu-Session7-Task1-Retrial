import { Button, Card, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onGetUserData } from '../../../services/action';
import { ModalComponent } from './Modal';

export const RegistrationForm = () => {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    job: '',
    error: {
      nameError: '',
      jobError: '',
    },
    isNameValid: false,
    isJobValid: false,
  });

  const dispatch = useDispatch();

  const nameFieldOnChangeHandler = (e) => {
    const nameValue = e.target.value;
    let nameError = '';
    let isNameValid = false;
    if (nameValue === '') {
      nameError = 'Name cannot be empty';
      isNameValid = false;
    } else {
      nameError = '';
      isNameValid = true;
    }

    setRegisterForm((prev) => {
      return {
        ...prev,
        name: nameValue,
        error: { ...prev.error, nameError },
        isNameValid,
      };
    });
  };

  const jobFieldOnChangeHandler = (e) => {
    const jobValue = e.target.value;
    let jobError = '';
    let isJobValid = false;
    if (jobValue === '') {
      jobError = 'Job cannot be empty';
      isJobValid = false;
    } else {
      jobError = '';
      isJobValid = true;
    }

    setRegisterForm((prev) => {
      return {
        ...prev,
        job: jobValue,
        error: { ...prev.error, jobError },

        isJobValid,
      };
    });
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (registerForm.isNameValid && registerForm.isJobValid) {
      // onGetUserData(registerForm.name, registerForm.job);
      dispatch(onGetUserData(registerForm.name, registerForm.job));
    } else if (registerForm.name === '' || registerForm.job === '') {
    }
  };

  return (
    <>
      <Card sx={{ width: '300px', p: 4 }}>
        <form onSubmit={onFormSubmitHandler}>
          <Typography sx={{ textAlign: 'center', mb: 2 }} variant="h6">
            User Registration
          </Typography>
          <Stack direction="column" spacing={2}>
            <TextField
              type="text"
              value={registerForm.name}
              placeholder="Please type your name"
              onChange={nameFieldOnChangeHandler}
            />
            <Typography sx={{ color: 'red' }}>
              {registerForm.error.nameError}
            </Typography>
            <TextField
              type="text"
              value={registerForm.job}
              placeholder="Please type your job"
              onChange={jobFieldOnChangeHandler}
            />
            <Typography sx={{ color: 'red' }}>
              {registerForm.error.jobError}
            </Typography>
            <Button type="submit" variant="contained">
              Register
            </Button>
          </Stack>
        </form>
      </Card>
    </>
  );
};
