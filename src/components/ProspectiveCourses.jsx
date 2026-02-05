import { Card, CardContent, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const prospectiveCourses = [
  { name: 'Artificial Intelligence', code: 'CS501' },
  { name: 'Machine Learning', code: 'CS502' },
  { name: 'Computer Graphics', code: 'CS503' },
];

const ProspectiveCourses = () => {
  return (
    <Card className="bg-gray-800 text-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          Prospective Courses
        </Typography>
        <List>
          {prospectiveCourses.map((course) => (
            <ListItem key={course.code} className="bg-gray-700 rounded-lg mb-2">
              <ListItemText primary={course.name} secondary={course.code} secondaryTypographyProps={{ color: 'text.secondary' }} />
              <Button variant="contained" color="primary" size="small">Add</Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ProspectiveCourses;
