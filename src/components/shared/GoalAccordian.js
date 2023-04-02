import React, {useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import {ListItemButton} from '@mui/material';
import {StudyReflection} from '../modals/StudyReflection';
import {getTaskByGoalandUser} from '../../services/services';
import DoneIcon from '@mui/icons-material/Done';

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({theme}) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const GoalAccordian = ({goal, user}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getTaskByGoalandUser(goal.id, user);
        setTasks(res.data.tasklist);
        //   setDogs(data?.message?.map((url, i) => buildDogFeedPost(url, i)));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>{goal?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{flexGrow: 1, maxWidth: '100%'}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Demo>
                  <List dense={dense}>
                    {tasks.map((task, i) => {
                      const date = new Date();
                      date.setDate(date.getDate() + i);
                      console.log(task)
                      return (<>
                        <ListItem backgroundColor="Green">
                          <ListItemText
                              primary={task.todo.title}
                              secondary={task.todo.description}
                          />
                          <ListItemIcon>
                            <Typography sx={{color: i == 0 ? "green": "", fontStyle: "bold"}}>{date.toDateString()}</Typography>
                          </ListItemIcon>
                          <ListItemIcon>
                            <ListItemButton>
                              <StudyReflection task={task} setTasks={setTasks}/>
                            </ListItemButton>
                          </ListItemIcon>
                          <ListItemIcon>
                            <DoneIcon color={task?.task?.active ? "success" : "disabled"}/>
                          </ListItemIcon>
                        </ListItem>
                        <Divider light />
                      </>)})
                    }
                  </List>
                </Demo>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
