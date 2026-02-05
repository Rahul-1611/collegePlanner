import { Card, CardContent, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const availableCourses = [
  { name: 'Advanced Web Development', code: 'CS402' },
  { name: 'Mobile App Development', code: 'CS403' },
  { name: 'Cloud Computing', code: 'CS404' },
];

const AvailableCourses = () => {
  return (
    <Card className="bg-gray-800 text-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          Courses Available this Term
        </Typography>
        <List>
          {availableCourses.map((course) => (
            <ListItem key={course.code} className="bg-gray-700 rounded-lg mb-2">
              <ListItemText primary={course.name} secondary={course.code} secondaryTypographyProps={{ color: 'text.secondary' }} />
              <Button variant="contained" color="primary" size="small">Enroll</Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AvailableCourses;
