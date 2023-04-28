import * as React from 'react';
import { Box, Button } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PopularVideo from './PopularVideo';

export default function ScrollableTabsButtonVisible() {
  const navigate = useNavigate();
  // ** Tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // ** useState
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: { xs: 320, sm: 480 },
            bgcolor: 'background.paper',
            marginLeft: '-20px'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 }
              }
            }}
          >
            <Tab label="Trending" onClick={() => onTrendingClick()} />
            <Tab label="New Movie" onClick={() => onNewMovieClick()} />
            <Tab label="Popular Movie" onClick={() => onPopularClick()} />
          </Tabs>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ fontWeight: 'bold', fontSize: 'medium', height: '30px' }}
          onClick={() => navigate('/channel/button/OnMainVideo')}
        >
          +Add Categories
        </Button>
      </Box>
      {showTrending && <PopularVideo />}
      {showNewMovie && <PopularVideo />}
      {showPopular && <PopularVideo />}
    </>
  );
}
