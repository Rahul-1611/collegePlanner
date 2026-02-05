import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const prereqs = [
  { course: 'Data Structures and Algorithms', prereq: 'Introduction to Computer Science' },
  { course: 'Web Development', prereq: 'Data Structures and Algorithms' },
  { course: 'Database Systems', prereq: 'Data Structures and Algorithms' },
];

const CoursePrereqs = () => {
  return (
    <Card className="bg-gray-800 text-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="mb-4">
          Course Prerequisites
        </Typography>
        <List>
          {prereqs.map((item, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText primary={item.course} secondary={`Prerequisite: ${item.prereq}`} secondaryTypographyProps={{ color: 'text.secondary' }} />
              </ListItem>
              {index < prereqs.length - 1 && <Divider component="li" className="bg-gray-700" />}
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CoursePrereqs;
