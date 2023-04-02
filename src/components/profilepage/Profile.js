import React, {useEffect, useState} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {GoalAccordian} from "../shared/GoalAccordian";
import Grid from '@mui/material/Unstable_Grid2';
import {GoalCard} from "../shared/GoalCard";
import {NewGoalCard} from "../shared/NewGoalCard";
import {getALLGoals, getGoalByID} from '../../services/services';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const {id} = useAuth();

  // const [goals, setGoals] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //       (async () => {
  //         try {
  //           setLoading(true);
  //           const res = await getGoalByID(goalId);
  //           console.log("try get all goal ")
  //           console.log(res.data)
  //           setGoal(res.data)
  //         //   setDogs(data?.message?.map((url, i) => buildDogFeedPost(url, i)));
  //         } catch (err) {
  //           console.log(err);
  //         } finally {
  //           setLoading(false);
  //         }
  //       })();
  //     }, []);

  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
      >
        {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
        )}
      </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const ProfilePage = () => {
  const {uid} = useAuth();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(uid);
  // Access the context provider
  // Display user details
  // build out ui for the profile page
  //
  return (
      <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
      >
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="My Goals" {...a11yProps(0)} />
          <Tab label="My Created Goals" {...a11yProps(1)} />
          <Tab label="Settings" {...a11yProps(2)} />
        </Tabs>
        <TabPanel         styles={{
          width: "100%",
        }} value={value} index={0}>
         <GoalAccordian/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center">
                  <NewGoalCard/>
              </Grid>
              <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center">
                  <GoalCard/>
              </Grid>
              <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center" >
                  <GoalCard/>
              </Grid>
             <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center" >
                 <GoalCard/>
             </Grid>

          </Grid>


        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
  );
};

