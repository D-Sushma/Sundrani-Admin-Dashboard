import React, { useState } from 'react';
import { Box, Button, styled, Card, Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PopularVideo from './PopularVideo';

// ** ParentRoot
const ParentRoot = styled(Card)({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  marginTop: '30px',
  padding: '10px',
  paddingBottom: '20px',
  // background: 'linear-gradient(to right, #FDFBFB, wheat 70%)',
  background: 'linear-gradient(to right, #FDFBFB, #EBEDEE 70%)'
});

export default function Categories() {
  const navigate = useNavigate();
  const [showTrending, setShowTrending] = useState(false);
  const [showNewMovie, setShowNewMovie] = useState(false);
  const [showPopular, setShowPopular] = useState(false);
  const onTrendingClick = () => {
    setShowTrending((current) => !current);
    // setShowTrending(true);
  };
  const onNewMovieClick = () => {
    setShowNewMovie((current) => !current);
    // setShowNewMovie(true);
  };
  const onPopularClick = () => {
    setShowPopular((current) => !current);
    // setShowPopular(true);
  };
  return (
    <>
      <ParentRoot>
        {/* <Box
          sx={{
            width: '100%',
            height: '200px',
            border: '1px solid light purple',
            background: 'linear-gradient(to right, #FDFBFB, wheat 70%)',
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
            <span> Categories</span>
          </p>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: 'bold', fontSize: 'large', height: '40px' }}
            onClick={() => navigate('/channel/button/OnMainVideo')}
          >
            +Add Categories
          </Button>
        </Box>

        <Box sx={{ marginTop: 4, display: 'flex' }}>
          <Box
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'red',
              color: 'white',
              marginTop: 1,
              marginLeft: 5,
              borderRadius: '0px 30px 30px 0px'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onClick={() => onTrendingClick()}
            >
              <Icon sx={{ mr: 1 }}>whatshot</Icon>
              Trending
            </div>
          </Box>
          <Box
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'red',
              color: 'white',
              marginTop: 1,
              marginLeft: 5,
              borderRadius: '0px 30px 30px 0px'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onClick={() => onNewMovieClick()}
            >
              <Icon sx={{ mr: 1 }}>fiber_new</Icon>
              New Movie
            </div>
          </Box>
          <Box
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'red',
              color: 'white',
              marginTop: 1,
              marginLeft: 5,
              borderRadius: '0px 30px 30px 0px'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onClick={() => onPopularClick()}
            >
              <Icon sx={{ mr: 1 }}>local_fire_department_sharp</Icon>
              Popular Movie
            </div>
          </Box>
        </Box>
        {/* </Box> */}
      </ParentRoot>
      {showTrending && <PopularVideo />}
      {showNewMovie && <PopularVideo />}
      {showPopular && <PopularVideo />}
    </>
  );
}
