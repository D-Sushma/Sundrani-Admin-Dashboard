import React from 'react';
import { Card, Box, styled } from '@mui/material';
import ChannelListObject from '../object/ChannelListObject';
import HeightMenu from './HeightMenu';

// ** SimpleCard
const CardRoot = styled(Card)({
  height: '100%',
  // height: '250px',
  width: '250px',
  marginRight: '10px',
  marginLeft: '10px',
  // background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
  background: 'linear-gradient(315deg, #ffcfdf 0%, #b0f3f1 74%)'
  // backgroundColor: '#90d5ec'
  // backgroundImage: 'linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)'
  // padding: '20px 24px'
});

// const CardTitle = styled('div')(({ subtitle }) => ({
//   fontSize: '1rem',
//   fontWeight: '500',
//   textTransform: 'capitalize',
//   marginBottom: !subtitle && '16px'
// }));

export default function ChannelList() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {ChannelListObject.map((items, i) => {
          return (
            <>
              <CardRoot>
                <Box
                  sx={{
                    width: '100%',
                    height: '150px',
                    background: 'linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)'
                  }}
                >
                  <img
                    style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                    key={i}
                    src={items.channel_img}
                    alt="channel-logo"
                  />
                </Box>
                <Box
                  key={i}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    marginTop: 1,
                    marginLeft: 1
                  }}
                >
                  {items.list_name}
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: 1
                  }}
                >
                  <HeightMenu />
                </Box>
              </CardRoot>
            </>
          );
        })}
      </Box>
    </>
  );
}
