import { Card, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const ResultForm = () => {
  const userData = useSelector((state) => {
    return state.userData;
  });

  console.log(userData);
  return (
    <Card sx={{ width: '300px', p: 4 }}>
      <Typography sx={{ textAlign: 'center', mb: 2 }} variant="h6">
        Result
      </Typography>
      <Typography>{`Name:${userData?.nameValue ?? ''}`}</Typography>
      <Typography>{`Job:${userData?.jobValue ?? ''}`}</Typography>
      <Typography>{`Id:${userData?.idValue ?? ''}`}</Typography>
      <Typography>{`Created At:${userData?.createdAtValue ?? ''}`}</Typography>
    </Card>
  );
};
