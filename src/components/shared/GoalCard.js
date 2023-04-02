import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {getUserByID, getGoalByID} from '../../services/services';

export const GoalCard = ({goalDetails}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getUserByID(goalDetails.author);
        console.log('try get user ');
        console.log(res.data);
        setAuthor(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  const img = "https://source.unsplash.com/random";
  return (
    <Card>
      <CardMedia
        component="img"
        // alt="green iguana"
        height="60"
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundColor: t => `#${Math.floor(Math.random()*16777215).toString(16)}`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {goalDetails.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {goalDetails.description}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          created by {author.username}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button
          onClick={() => navigate(`/goal/${goalDetails.id}`)}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
