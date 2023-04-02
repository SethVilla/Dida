import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const GoalCard = ({goalDetails}) => {
console.log(goalDetails)
    const theme = useTheme();
    const navigate = useNavigate();
    return ( <Card>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {goalDetails.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {goalDetails.description}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        created by {goalDetails.author}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button onClick={() => navigate(`/goal/${goalDetails.id}`)} size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
}