import React from 'react';
import { Box, Button, styled, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainVideoObject from '../object/MainVideoObject';

// ** ParentRoot
const ParentRoot = styled(Card)({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  marginTop: '30px',
  padding: '10px',
  paddingBottom: '20px',
  background: 'linear-gradient(to right, #FDFBFB, #EBEDEE 70%)'
});

// ** CardRoot
const CardRoot = styled(Card)({
  height: '250px',
  width: '200px',
  marginRight: '10px',
  marginLeft: '10px',
  //   background: 'linear-gradient(315deg, #ffcfdf 0%, #b0f3f1 74%)',
  backgroundColor: '',
  // backgroundImage: 'linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)'
  padding: '10px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderImage: 'linear-gradient(to right,black,blue,blue, red) 1'
  //   borderImage: 'linear-gradient(to right,darkorchid,black, red) 1'
  //   borderRadius: '5px'
});

export default function MainVideos() {
  const navigate = useNavigate();
  return (
    <>
      <ParentRoot>
        {/* <Box
          sx={{
            width: '100%',
            height: 'auto',
            border: '1px solid light purple',
            background: 'linear-gradient(to right, #FDFBFB, #EBEDEE 70%)',
            marginTop: '40px',
            p: 1
          }}
        > */}
        {/* HEADER */}
        <Box
          sx={{
            width: '100%',
            height: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <p
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
              marginLeft: '5px',
              textTransform: 'uppercase',
              //   background: 'linear-gradient(to right, #30CFD0 0%, #330867 10%)',
              //   webkitBackgroundClip: 'text',
              //   webkitTextFillColor: 'transparent',
              background: 'linear-gradient(to right, red 10%, blue 80%)',
              webkitTextFillColor: 'transparent',
              webkitBackgroundClip: 'text'
            }}
          >
            <span> Main Videos</span>
          </p>
          <Box
            sx={{
              width: '300px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ fontWeight: 'bold', fontSize: 'large', height: '40px' }}
              onClick={() => navigate('/channel/button/OnMainVideo')}
            >
              +Add Main Video
            </Button>

            <Button
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 'bold', fontSize: 'large', height: '40px', marginLeft: '5px' }}
              onClick={() => navigate('/channel/button/OnMainVideo')}
            >
              View All
            </Button>
          </Box>
        </Box>

        {/* MAIN VIDEOS */}
        <Box sx={{ display: 'flex', marginTop: '10px' }}>
          {MainVideoObject.map((items, i) => {
            return (
              <>
                <CardRoot>
                  <Box
                    sx={{
                      width: '100%',
                      height: '150px',
                      border: '1px solid #EEEEEE'
                    }}
                  >
                    <img
                      style={{ width: '100%', height: '100%' }}
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
                </CardRoot>
              </>
            );
          })}
          <Box onClick={() => navigate('/channel/button/ViewAllButton')}></Box>
        </Box>
        {/* </Box> */}
      </ParentRoot>
    </>
  );
}
