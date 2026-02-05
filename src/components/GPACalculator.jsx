import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const GPACalculator = () => {
  return (
    <Card className="bg-gray-800 text-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          GPA Calculator for this Semester
        </Typography>
        <form noValidate autoComplete="off">
          <TextField id="course-name" label="Course Name" variant="outlined" fullWidth margin="normal" InputLabelProps={{ style: { color: 'white' } }} />
          <TextField id="credits" label="Credits" type="number" variant="outlined" fullWidth margin="normal" InputLabelProps={{ style: { color: 'white' } }} />
          <TextField id="grade" label="Grade" variant="outlined" fullWidth margin="normal" InputLabelProps={{ style: { color: 'white' } }} />
          <Button variant="contained" color="primary" fullWidth className="mt-4">
            Calculate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GPACalculator;
