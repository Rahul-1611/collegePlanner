import { Card, CardContent, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const gpaData = [
  { semester: 1, gpa: 3.5 },
  { semester: 2, gpa: 3.6 },
  { semester: 3, gpa: 3.4 },
  { semester: 4, gpa: 3.7 },
  { semester: 5, gpa: 3.8 },
  { semester: 6, gpa: 3.9 },
];

const GPATracker = () => {
  return (
    <Card className="bg-gray-800 text-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          GPA Tracker
        </Typography>
        <div style={{ height: 300 }}>
          <LineChart
            xAxis={[{
              data: gpaData.map((d) => d.semester),
              scaleType: 'point',
              label: 'Semester',
            }]}
            series={[{
              data: gpaData.map((d) => d.gpa),
              color: '#4caf50',
            }]}
            sx={{
              '& .MuiChartsAxis-label': { fill: 'white' },
              '& .MuiChartsAxis-tickLabel': { fill: 'white' },
              '& .MuiChartsAxis-line': { stroke: 'white' },
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default GPATracker;
