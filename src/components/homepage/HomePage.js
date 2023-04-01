import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {getDogs} from '../../services/services';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {buildDogFeedPost} from '../../utils/utils';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {GoalCard} from "../shared/GoalCard";
import HeaderImage from "../../assets/adrian-infernus-GLf7bAwCdYg-unsplash.jpg";
import Grid from '@mui/material/Unstable_Grid2';
export const HomePage = () => {

    const styles = {
        paperContainer: {
            backgroundImage: `url(${HeaderImage})`
        }
    };
  return (
      <Box sx={{ width: '100%'}}>
          <Box sx={{ padding: "98px 0px", width: '100%'}}>
              <Typography variant="h1" textAlign="center">
                  The Web App
              </Typography>
              <Typography variant="h2" gutterBottom textAlign="center">
                  that helps you <Typography display={'inline'} variant="h2">
                  reach your goals
              </Typography>
              </Typography>
          </Box>
    <Box
      sx={{
        // width: '100%',
        // height: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        //   flexGrow: 1
      }}
    >
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center">
                    <GoalCard/>
                </Grid>
                <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center" >
                    <GoalCard/>
                </Grid>
                <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center">
                    <GoalCard/>
                </Grid>
                <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center">
                    <GoalCard/>
                </Grid>
                <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center">
                    <GoalCard/>
                </Grid>
                <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center">
                    <GoalCard/>
                </Grid>
                <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center">
                    <GoalCard/>
                </Grid>
                <Grid xs={2} sm={4} md={3} display="flex" justifyContent="center">
                    <GoalCard/>
                </Grid>
            </Grid>
    </Box>
      </Box>
  );
};
