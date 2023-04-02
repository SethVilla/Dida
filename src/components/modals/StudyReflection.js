import React from 'react';
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
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

const steps = [
  {
    label: 'Select Comfort Zone',
    component: (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="0"
            control={<Radio />}
            label="Too comfortable"
          />
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Comfort Zone"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="Learning Zone"
          />
          <FormControlLabel value="3" control={<Radio />} label="Panic Zone" />
        </RadioGroup>
      </FormControl>
    ),
    description: `
    Feeling very comfortable, that nothing in this task is new for you? Choose TOO COMFORTABLE.\n
    Feeling in your comfort zone, and not learning a lot? Choose COMFORT ZONE.\n
    Feeling challenged and excited, and this amount of challenged made you engaged? Choose LEARNING ZONE.\n
    Feeling high anxiety and stressed out? Select PANIC ZONE.`,
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
          <FormControlLabel value="0" control={<Radio />} label="10 min" />
          <FormControlLabel value="1" control={<Radio />} label="20 min" />
          <FormControlLabel value="2" control={<Radio />} label="30 min" />
          <FormControlLabel value="3" control={<Radio />} label="40 min" />
          <FormControlLabel value="4" control={<Radio />} label="50 min" />
          <FormControlLabel value="5" control={<Radio />} label="60 min" />
        </RadioGroup>
      </FormControl>
    ),
    description:
      'Please fill the amount of time you use to complete this task.',
  },
];
export const StudyReflection = ({task}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(task)
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
                            onClick={handleNext}
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
                  <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>
                    Reset
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
