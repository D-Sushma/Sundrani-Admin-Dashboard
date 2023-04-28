import * as React from 'react';
import {
  Box,
  Button,
  styled,
  // ** Card
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography
} from '@mui/material';
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
  // background: 'linear-gradient(to right, #FDFBFB, #D6E6F2 70%)',
  // background: 'linear-gradient(to right, #FDFBFB, #E5D1FA 70%)'
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
          background: 'linear-gradient(to right, #FDFBFB, lightpink 70%)',
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
            <span> Popular Videos</span>
          </p>
          <Button
            variant="outlined"
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
                    width: '250px',
                    height: 'auto',
                    // border: '1px solid black',
                    marginLeft: '10px',
                    marginTop: '10px',
                    // borderRadius: '10px',
                    // borderWidth: '2px',
                    // borderStyle: 'solid',
                    // borderImage: 'linear-gradient(to right, #FDFBFB, #D6E6F2 70%) 1',
                    boxShadow: 3
                  }}
                >
                  <Card sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="150"
                        image={items.channel_img}
                        alt="channel-logo"
                        sx={{ objectFit: 'fill' }} // contain, cover
                      />
                      <CardContent>
                        {/* <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography> */}
                        <Typography variant="body2" color="text.secondary">
                          {items.list_name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </>
            );
          })}
        </Box>
        {/* </Box> */}
      </ParentRoot>
    </>
  );
}
