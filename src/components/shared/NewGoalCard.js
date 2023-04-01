import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export const NewGoalCard = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    return ( <Card>

                <CardMedia sx={{display:"flex", justifyContent:"center"}} height="140">
                    <AddIcon color="action" sx={{ fontSize: 200 }} />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        New Challenge Goal
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Here you can create your personalized challenge goal
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => navigate("/goal/1")} size="small">Create</Button>
                </CardActions>
            </Card>
        );
}