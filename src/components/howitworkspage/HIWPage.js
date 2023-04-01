import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export const HIWPage = () => {

  return (
  <div>
    <Typography padding="24px" variant="h3">
        How Dida works
    </Typography>
    <Typography padding="12px 24px" variant="h4">
        Science behind Dida:
    </Typography>
        <Typography padding="12px 48px" variant="body1">
            Dida in Chinese (抵达) means reaching the goal. Dida web is a study plan generator, aim to help user to learn better with a better study plan.
            We all know that review is very important for memorizing new knowledges, for example when learning new French words, or practicing new Leetcode questions.
            However, it is difficult to remember when to review the questions we practice a few days before and it’s not easy to keep the track of all contents we learned.
            Here, with the support of scientific models, Dida helps users to generate study plans that could enhance their learning outcomes.
        </Typography>
        <Box padding="12px 48px">
            <img src="https://simonbaddeley64.files.wordpress.com/2021/06/ebbinghaus-forgetting-curve.jpg" alt="forgetting curve" width="500" height="333"></img>
            <Typography variant="caption" display="block" gutterBottom>
                image acquired from website: https://simonbaddeley64.files.wordpress.com/2021/06/ebbinghaus-forgetting-curve.jpg
            </Typography>
        </Box>
        <Typography padding="12px 48px" variant="body1">
            About the review, one of the reason why it’s difficult to keep the habit is that there are so many things needs to be reviewed,
            and it’s difficult to prioritize them. In Dida, we prioritize tasks for students based on the learning zone model.
        </Typography>
        <Box padding="12px 48px">
            <img src="https://media.licdn.com/dms/image/C5612AQG8YBIGqWcp-w/article-cover_image-shrink_600_2000/0/1617033859542?e=1685577600&v=beta&t=K-jyD3RpddYm5GS7eXo7yQ7SiJi_n_U01JDkcVA8CkA" alt="forgetting curve" width="500" height="333"></img>
            <Typography variant="caption" display="block" gutterBottom>
                image acquired from website: https://media.licdn.com
            </Typography>
        </Box>
        <Typography padding="0 48px">
        </Typography>
    <Typography padding="0 24px" variant="h4">
        How to use Dida:
    </Typography>

    <Typography padding="0 48px" variant="h5" gutterBottom>
        Enroll into a existing goal
    </Typography>
    <Typography padding="0 48px" variant="h5" gutterBottom>
        Create a new personalized goal
    </Typography>

  </div>
  );
};
