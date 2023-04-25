import React from 'react';
import { Card, Box, styled } from '@mui/material';

// ** SimpleCard
const CardRoot = styled(Card)({
  // height: '100%',
  height: '250px',
  width: '250px',
  marginRight: '30px',
  marginLeft: '30px',
  padding: '20px 24px'
});

const CardTitle = styled('div')(({ subtitle }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
  marginBottom: !subtitle && '16px'
}));

export default function ChannelList() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CardRoot>
          <Box>sundrani</Box>
        </CardRoot>
        <CardRoot>
          <Box>sundrani</Box>
        </CardRoot>
        <CardRoot>
          <Box>sundrani</Box>
        </CardRoot>
        <CardRoot>
          <Box>sundrani</Box>
        </CardRoot>
        <CardRoot>
          <Box>sundrani</Box>
        </CardRoot>
      </Box>
    </>
  );
}
