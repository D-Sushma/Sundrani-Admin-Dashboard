import React from 'react';
import { Card, styled, Box } from '@mui/material';

// ** ParentRoot
const ParentRoot = styled(Card)({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  marginTop: '30px',
  padding: '10px',
  paddingBottom: '20px',
  background: 'linear-gradient(to right, #FEF2F4 30%, #FDF7C3 70%)'
});

export default function Menus() {
  return (
    <>
      <ParentRoot>
        <Box sx={{ display: 'flex' }}>
          <Box>Videos</Box>
          <Box>Categories</Box>
        </Box>
      </ParentRoot>
    </>
  );
}
