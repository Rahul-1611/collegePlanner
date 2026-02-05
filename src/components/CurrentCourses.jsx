import { Card, CardContent, Typography, List, ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';

const courses = [
  { name: 'Introduction to Computer Science', code: 'CS101', grade: 'A' },
  { name: 'Data Structures and Algorithms', code: 'CS201', grade: 'A-' },
  { name: 'Web Development', code: 'CS301', grade: 'B+' },
  { name: 'Database Systems', code: 'CS401', grade: 'B' },
];

const CurrentCourses = () => {
  return (
    <Card className="bg-gray-800 text-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          Current Courses
        </Typography>
        <List>
          {courses.map((course) => (
            <ListItem key={course.code} className="bg-gray-700 rounded-lg mb-2">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>{course.code.substring(0, 2)}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={course.name} secondary={`Grade: ${course.grade}`} secondaryTypographyProps={{ color: 'text.secondary' }} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CurrentCourses;
