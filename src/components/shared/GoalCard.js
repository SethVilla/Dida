import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material";

export const GoalCard = () => {
    const theme = useTheme();
    return ( <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        30 Day Challenge
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Most common Interview Leetcodes
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        created by Dida Admin
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
}