import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const courses = [
  { name: 'Introduction to Computer Science', code: 'CS101', grade: 'A' },
  { name: 'Data Structures and Algorithms', code: 'CS201', grade: 'A-' },
  { name: 'Web Development', code: 'CS301', grade: 'B+' },
  { name: 'Database Systems', code: 'CS401', grade: 'B' },
];

const Courses = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <Typography variant="h5" component="div" className="mb-4 text-center">
        My Courses
      </Typography>
      <List>
        {courses.map((course) => (
          <ListItem key={course.code} className="shadow-sm rounded-lg mb-2 bg-white">
            <ListItemAvatar>
              <Avatar>{course.code.substring(0, 2)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={course.name} secondary={`Grade: ${course.grade}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Courses;
