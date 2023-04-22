import React from 'react';
import Table from './shared/Table';
import { Breadcrumb, SimpleCard } from 'app/components';
import { Box, styled } from '@mui/material';

// ** BreadCrumb
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));
export default function User() {
  return (
    <>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Buttons' }]}
          />
        </Box>
        <SimpleCard title="User List">
          <Table />
        </SimpleCard>
      </Container>
    </>
  );
}
