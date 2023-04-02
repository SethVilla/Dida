import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {getALLGoals, getTODOByID, getGoalByID} from '../../services/services';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {GoalCard} from '../shared/GoalCard';
import HeaderImage from '../../assets/adrian-infernus-GLf7bAwCdYg-unsplash.jpg';
import Grid from '@mui/material/Unstable_Grid2';
export const HomePage = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const goals = await getALLGoals();
        console.log('try get all goal ');
        console.log(goals.data);
        setGoals(goals.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const styles = {
    paperContainer: {
      backgroundImage: `url(${HeaderImage})`,
    },
  };
  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{padding: '98px 0px', width: '100%'}}>
        <Typography variant="h1" textAlign="center">
          The Web App
        </Typography>
        <Typography variant="h2" gutterBottom textAlign="center">
          that helps you{' '}
          <Typography display={'inline'} variant="h2">
            reach your goals
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={
          {
            // width: '100%',
            // height: '100%',
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            //   flexGrow: 1
          }
        }
      >
        <Typography padding="0 48px">
          <Grid container spacing={5} columns={{xs: 4, sm: 8, md: 12}}>
            {!loading &&
              goals.map(goal => (
                <Grid
                  xs={2}
                  sm={4}
                  md={3}
                  display="flex"
                  justifyContent="center"
                >
                  <GoalCard goalDetails={goal} />
                  {console.log(goal)}
                </Grid>
              ))}
          </Grid>
        </Typography>
      </Box>
    </Box>
  );
};
