import React from 'react';
import { Box, Button, styled, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainVideoObject from '../object/MainVideoObject';

// ** SimpleCard
const CardRoot = styled(Card)({
  height: '200px',
  width: '350px'
  // marginRight: '10px',
  // marginLeft: '10px',
  //   background: 'linear-gradient(315deg, #ffcfdf 0%, #b0f3f1 74%)',
  // backgroundColor: 'lightpurple'
  // backgroundImage: 'linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)'
  // padding: '10px',
  // borderWidth: '3px',
  // borderStyle: 'solid',
  // borderImage: 'linear-gradient(to right,black,blue,blue, red) 1'
  //   borderImage: 'linear-gradient(to right,darkorchid,black, red) 1'
  //   borderRadius: '5px'
});

export default function MainVideos() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          border: '1px solid light purple',
          background: 'linear-gradient(to right, #FDFBFB, lightpink 70%)',
          marginTop: '40px',
          p: 1
        }}
      >
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
            <span> Popular Videos</span>
          </p>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: 'bold', fontSize: 'large', height: '40px' }}
            onClick={() => navigate('/channel/button/ViewAllButton')}
          >
            View All
          </Button>
        </Box>

        {/* MAIN VIDEOS */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
          {MainVideoObject.map((items, i) => {
            return (
              <>
                <Box
                  sx={{
                    width: '350px',
                    height: '300px',
                    border: '1px solid black',
                    marginRight: '10px',
                    marginLeft: '10px',
                    marginTop: '10px',
                    borderRadius: '10px',
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderImage: 'linear-gradient(to right, #FDFBFB, lightpink 70%) 1',
                    boxShadow: 3
                  }}
                >
                  <CardRoot>
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <img
                        style={{ width: '100%', height: '100%' }}
                        key={i}
                        src={items.channel_img}
                        // src="/assets/images/sundrani-images/img_4.jpg"
                        alt="channel-logo"
                      />
                    </Box>
                  </CardRoot>
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
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
