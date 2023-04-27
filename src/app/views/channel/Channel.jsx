import React from 'react';
import { Breadcrumb } from 'app/components';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import ChannelList from './shared/ChannelList';
import MainVideos from './shared/MainVideos';
import PopularVideo from './shared/PopularVideo';
import Categories from './shared/Categories';
import Menus from './shared/Menus';

// ** Breadcrumb
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

export default function Channel() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Channel', path: '/channel' }, { name: 'Channel List' }]}
        />
      </Box>
      <ChannelList />
      <Menus />
      <MainVideos />
      <Categories />
      <PopularVideo />
    </Container>
  );
}
