import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {getUserByID, getGoalByID} from '../../services/services';
export const GoalPage = () => {
    const {goalId} = useParams();

    const [goal, setGoal] = useState([]);
    const [author, setAuthor] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
          try {
            setLoading(true);
            const res = await getGoalByID(goalId);
            console.log("try get goal ")
            console.log(res.data)
            console.log(res.data.author)
            const res2 = await getUserByID(res.data.author);
            console.log("try get user ")
            console.log(res2.data)
            setGoal(res.data)
            setAuthor(res2.data)
          //   setDogs(data?.message?.map((url, i) => buildDogFeedPost(url, i)));
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
        })();
      }, []);
    return (
    <Box sx={{background:"white"}}>
        <Typography padding="12px 48px" variant="h3">
            {goal?.title}:
        </Typography>
        <Typography padding="0 72px" variant="body1">
            Author: ({author.username})
        </Typography>
        <Typography padding="0 72px" variant="body1">
            Created at : (creation date)
        </Typography>
        <Typography padding="12px 48px" variant="h4">
            Description:
        </Typography>
            <Typography padding="0 72px" variant="body1">
                (The description of this goal)
            </Typography>
        <Typography padding="12px 48px" variant="h4">
            Tasks in this goal:
        </Typography>
            <Typography padding="0 72px">
                (Acquire all todos (maybe just title) here)
            </Typography>

        <Typography padding="12px 48px" variant="h6" gutterBottom>
            (Two personalized question for the user to fill)
        </Typography>
        <Typography padding="0 72px" variant="h6" gutterBottom>
            What is your targeted deadline for participating in this goal?
        </Typography>
        <Typography padding="0 72px" variant="h6" gutterBottom>
            How long time do you plan on studying for this goal?
        </Typography>
        <Typography padding="12px 48px" variant="h5" gutterBottom>
           Enroll(make this into a button)
        </Typography>


    </Box>
    );
};