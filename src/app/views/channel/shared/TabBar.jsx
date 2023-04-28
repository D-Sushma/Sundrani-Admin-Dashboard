import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Categories2 from './Categories2';
import MainVideos from './MainVideos';

export default function LabTabs() {
  // ** Tabs
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', mt: 5 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Categories" value="1" />
            <Tab label="Main Videos" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Categories2 />
        </TabPanel>
        <TabPanel value="2">
          <MainVideos />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
