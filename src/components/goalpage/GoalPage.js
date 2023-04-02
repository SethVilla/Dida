import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {getUserByID, getGoalByID, getALLTODOinGoal} from '../../services/services';
export const GoalPage = () => {
  const {goalId} = useParams();
  const navigate = useNavigate();

  const [goal, setGoal] = useState([]);
  const [author, setAuthor] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getGoalByID(goalId);
        const res2 = await getUserByID(res.data.author);
        const res3 = await getALLTODOinGoal(goalId);
        setGoal(res.data);
        setAuthor(res2.data);
        setTodos(res3.data.todolist);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box sx={{background: 'white'}}>
      <Typography padding="12px 48px" variant="h3">
        Goal: {goal?.title}:
      </Typography>
      <Typography padding="0 72px" variant="body1">
        Author: {author.username}
      </Typography>
      <Typography padding="0 72px" variant="body1">
        Created on: {goal?.createdDate}
      </Typography>
      <Typography padding="12px 48px" variant="h4">
        Description:
      </Typography>
      <Typography padding="0 72px" variant="body1">
        {goal?.description}
      </Typography>
      <Typography padding="12px 48px" variant="h4">
        Tasks in this goal:
      </Typography>
      {!loading && todos.map( todo=>
          <Typography padding="0 72px">{todo.title}</Typography>
        )}

      <Typography padding="12px 48px" variant="h4" gutterBottom>
        Before enrolling:
      </Typography>
      <Typography padding="0 72px" variant="body1">
        Please answer the following two questions before enrolling.
      </Typography>
      <Typography padding="12px 72px" variant="h6" gutterBottom>
        What is your targeted deadline for participating in this goal?
      </Typography>
      <Typography padding="12px 72px" variant="h6" gutterBottom>
        How long time do you plan on studying for this goal?
      </Typography>
      <Typography padding="12px 48px" variant="h5" gutterBottom>
        <Button onClick={() => navigate('/profile')} variant="contained">
          Enroll
        </Button>
      </Typography>
    </Box>
  );
};
