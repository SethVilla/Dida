import React, {useReducer} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {studyReflectionReducer} from "../../reducers/studyReflectionReducer";
import GroupsIcon from '@mui/icons-material/Groups';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const StudyReflection = ({task, setTasks}) => {
  const [open, setOpen] = React.useState(false);
  const [payload, setPayload] = useReducer(studyReflectionReducer, {...task?.task, performance: {}});
  const steps = [
    {
      label: 'Select Comfort Zone',
      component: (
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Comfort Zone</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
              <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="Too comfortable"
                  onChange={(event)=>{
                    setPayload({type: "change_learning_zone", value : 0})
                  }}
              />
              <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Comfort Zone"
                  onChange={(event)=>{
                      setPayload({type: "change_learning_zone", value : 1})
                  }}
              />
              <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Learning Zone"
                  onChange={(event)=>{
                      setPayload({type: "change_learning_zone", value : 2})
                  }}
              />
              <FormControlLabel value="3" control={<Radio />} label="Panic Zone"
                                onChange={(event)=>{
                                    setPayload({type: "change_learning_zone", value : 3})                                }
              }
              />
            </RadioGroup>
          </FormControl>
      ),
      description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Completion Time',
      component: (
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
              <FormControlLabel value="0" control={<Radio />} label="10 min"
                                onChange={(event)=>{
                                    setPayload({type: "change_time", value : 0})}}
                                    />
              <FormControlLabel value="1" control={<Radio />} label="20 min"
                                onChange={(event)=>{
                                    setPayload({type: "change_time", value : 1})}}
              />
              <FormControlLabel value="2" control={<Radio />} label="30 min"
                                onChange={(event)=>{
                                    setPayload({type: "change_time", value : 2})}}
              />
              <FormControlLabel value="3" control={<Radio />} label="40 min"                                 onChange={(event)=>{
                  setPayload({type: "change_time", value : 3})}}/>
              <FormControlLabel value="4" control={<Radio />} label="50 min"                                 onChange={(event)=>{
                  setPayload({type: "change_time", value : 4})}}/>
              <FormControlLabel value="5" control={<Radio />} label="60 min"
                                onChange={(event)=>{
                                    setPayload({type: "change_time", value : 5})}}
              />
            </RadioGroup>
          </FormControl>
      ),
      description:
          'An ad group contains one or more ads which target a shared set of keywords.',
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (state) => {
      if (state === "Finish") {
          setTasks(prevState => {
              const newState = [...prevState]
              const taskToUpdate = newState.find(el => el.task.id === task.task.id)
              taskToUpdate.task.active = true
              console.log(taskToUpdate)
              return newState
          })
      }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = () => {

  }

  return (
    <div>
      <Button onClick={handleOpen}>start task</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{backdrop: Backdrop}}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {task.todo.title}
            </Typography>
            <Typography id="transition-modal-description" sx={{mt: 2}}>
            {task.todo.description}
            </Typography>
          <FormGroup>
              <Typography variant="subtitle" sx={{mt: 2, fontWeight: "bold"}}>
                  Enable Collaboration
              </Typography>
              <FormControlLabel control={<Switch />} label={<GroupsIcon/>} />
          </FormGroup>
            <Box sx={{maxWidth: 400}}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      optional={
                        index === 2 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      {step.component}
                      <Box sx={{mb: 2}}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={() => handleNext(index === steps.length - 1 ? 'Finish' : 'Continue')}
                            sx={{mt: 1, mr: 1}}
                          >
                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{mt: 1, mr: 1}}
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{p: 3}}>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleClose} sx={{mt: 1, mr: 1}}>
                    close
                  </Button>
                </Paper>
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
